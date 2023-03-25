import ServiceCard from "../ServiceCard";

const ServicesMobile = () => {
  return (
    <div className="servicesMobile">
      <div className="content">
        <h1>Our Services</h1>
        <h2>Demand First-Rate Best Services</h2>
        <p className="content-mobile">
          We offer Comprehensive Information Technology solutions to address all
          your business needs, including electronic payment solutions,
          accounting software, stock management, ordering and supply chain
          challenges. Additionally, we also cater to the education sector with
          our consultancy and ICT training services.
        </p>
      </div>
      <div className="graphics">
        <ServiceCard
          text="App Development"
          image="/images/app-system.svg"
          className="app"
        />
        <ServiceCard text="Ui/Ux" image="/images/ui-system.svg" />
        <ServiceCard text="API Integration" image="/images/api-system.svg" />
        <ServiceCard text="Web Development" image="/images/web-system.svg" />
        <ServiceCard text="Cooperate Branding" image="/images/coop-table.svg" />
      </div>
    </div>
  );
};

export default ServicesMobile;
