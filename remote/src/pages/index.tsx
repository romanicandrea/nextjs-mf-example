import Head from "next/head";
import RButton from "./RButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Remote App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RButton></RButton>
    </>
  );
}
