import { useGetWidth } from "../../CustomHooks/useGetWidth";
import ServiceDesktop from "../serviceDesktop";
import ServicesMobile from "../servicesMobile";

const Services = ({ windowWidth }) => {
  const [currentWindowWidth] = useGetWidth(windowWidth);

  return (
    <div className="services">
      {currentWindowWidth < 1512 ? <ServicesMobile /> : <ServiceDesktop />}
    </div>
  );
};

export default Services;

Services.getInitialProps = (ctx) => {
  // Get the window width from the server-side context
  const { req } = ctx;
  const windowWidth = req ? req.headers["user-agent"] : window.innerWidth;
  return { windowWidth };
};
