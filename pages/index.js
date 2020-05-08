import Head from "next/head";

// Importing components
import Header from "../components/generic_components/header/index";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Personal blog platform</title>
      </Head>

      <header>Hello I'm header</header>
      <Header />
      <main>Hello I'm main</main>
      <footer>Hello I'm footer</footer>

      <style jsx>{`
        .container {
          min-width: 100vw;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
