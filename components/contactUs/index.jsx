import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <h1 className="contactUs-header">Contact Us</h1>
      <div className="contactUs-box">
        <div className="phone-box">
          <PhoneIcon className="phone-icon" />
          <span className="phone-number">+234 803 070 7614</span>
        </div>
        <div className="email-box">
          <MailOutlineIcon className="email-icon" />
          <span className="email-details">Okunola.olag@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
