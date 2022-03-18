import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import styles from '../styles/404.module.scss';
import  Head  from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [router])

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text='404'/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ea!</h2>
      </div>
    </>
  );
}

export default Error;