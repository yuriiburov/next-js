import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss';
import  Head  from "next/head";


const Home = () => (
  <>
    <Head>
      <title>Index</title>
    </Head>
    <div className={styles.wrapper}>
      <Heading text='Hello world!'/>
    </div>
  </>

)

export default Home;