import ServiceCard from "../ServiceCard";

const ServicesMobile = () => {
  return (
    <div className="servicesSection">
      <div className="content">
        <h1 className="content-header">Our Services</h1>
        <h2>Demand First-Rate Best Services</h2>
        <div className="content-text">
          We offer Comprehensive Information Technology solutions to address all
          your business needs, including electronic payment solutions,
          accounting software, stock management, ordering and supply chain
          challenges. Additionally, we also cater to the education sector with
          our consultancy and ICT training services.
        </div>
      </div>
      <div className="frame-1">
        <ServiceCard text="Ui/Ux" image="/images/ui-system.svg" />
      </div>
      <div className="frame-2">
        <ServiceCard text="Web Development" image="/images/web-system.svg" />
      </div>
      <div className="frame-3">
        <ServiceCard
          text="App Development"
          image="/images/app-system.svg"
          className="app"
        />
      </div>
      <div className="frame-4">
        <ServiceCard text="API Integration" image="/images/api-system.svg" />
      </div>
      <div className="frame-5">
        <ServiceCard text="Cooperate Branding" image="/images/coop-table.svg" />
      </div>
    </div>
  );
};

export default ServicesMobile;
