import ServiceCard from "../ServiceCard";

const ServicesMobile = () => {
  return (
    <div className="servicesMobile">
      <div className="content">
        <h1>Our Services</h1>
        <h2>Demand First-Rate Best Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at consequat
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
