import Head from "next/head";
import Footer from "../components/footer";
import Team from "../components/team";
import MobileNav from "../components/mobileNav";

const Home = () => {
  return (
    <>
      <Head>
        <title>Skrew Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <header>
          <nav>
            <MobileNav />
          </nav>
          <section>Hero Section</section>
        </header>
        <main>
          <section className="services">Our Services</section>
          <section className="solutions">
            We Are Here For Your Business Solutions
          </section>
          <section className="team">
            <Team />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};

export default Home;
