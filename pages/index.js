import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main"></main>
    </div>
  );
}