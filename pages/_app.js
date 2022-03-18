import Layout from "../components/Layout";
import image from '../public/1519799119530.jpeg';
import Image from "next/image";
import  Head  from 'next/head';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"/>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={image} alt={'beautiful place'} placeholder={'blur'}/>
  </Layout>
)

export default MyApp;
