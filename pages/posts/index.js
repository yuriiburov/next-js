import Heading from "../../components/Heading";
import Head from "next/head";
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return { notFound: true }
  }

  return { props: { posts: data } }
}

const Posts = ({posts}) => (
  <>
    <Head>
      <title>Posts</title>
    </Head>
    <Heading text={'Posts list:'}/>
    {
      posts && posts.map(({ id, title }) => (
        <li key={id}><Link href={`/posts/${id}`}>{title}</Link></li>
      ))
    }
  </>
)

export default Posts;