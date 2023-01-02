import ServiceCard from "../ServiceCard";

const ServiceDesktop = () => {
  return (
    <div className="services-desktop">
      <div className="content-desk">
        <h1>Our Services</h1>
        <h2>Demand First-Rate Best Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at consequat
        </p>
        <div className="frame-1">
          <ServiceCard text="Ui/Ux" image="/images/ui-system.svg" />
        </div>
        <div className="frame-2">
          <ServiceCard text="Web Development" image="/images/web-system.svg" />
        </div>
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

export default ServiceDesktop;
