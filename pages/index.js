import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <body>
        <header>
          <nav></nav>
          <section>Hero Section</section>
        </header>
        <main>
          <section className="services">Our Services</section>
          <section className="solutions">
            We Are Here For Your Business Solutions
          </section>
          <section className="team">Meet Our Team</section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};

export default Home;
