import Head from "next/head";
import Footer from "../components/footer";
import Team from "../components/team";
import MobileNav from "../components/mobileNav";
import Hero from "../components/hero";
import Solutions from "./../components/solutions/index";
import Services from "../components/services";
import { Link } from "react-scroll/modules";
import { useGetScroll } from "../CustomHooks/useGetScroll";

const Home = ({ windowScroll }) => {
  const [currentWindowScroll] = useGetScroll(windowScroll);

  return (
    <>
      <Head>
        <title>Skrew Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        {currentWindowScroll >= 520 && (
          <div className="button-top">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-2000}
              duration={700}
            >
              <button>&#8593;</button>
            </Link>
          </div>
        )}
        <header id="header">
          <nav>
            <MobileNav />
          </nav>
          <section>
            <Hero />
          </section>
        </header>
        <main>
          <section className="services">
            <Services />
          </section>
          <section className="solutions" id="company">
            <Solutions />
          </section>
          <section className="team" id="resources">
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

Home.getInitialProps = (ctx) => {
  // Get the window width from the server-side context
  const { req } = ctx;
  const windowScroll = req ? req.headers["user-agent"] : window.scrollY;
  return { windowScroll };
};
