const ServiceCard = ({ text, image }) => {
  const cardBox = {
    marginBottom: "55px",
    borderRadius: "25px",
    boxShadow: "0px 6px 28px -5px rgba(202, 202, 202, 0.25)",
    // border: "1px solid red",
  };

  const curve = {
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
  };

  const textStyle = {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "30px",
    color: "#211f1f",
    paddingTop: "24px",
    paddingBottom: "24px",
    textAlign: "center",
  };

  return (
    <div style={cardBox}>
      <img src={image} alt="" style={curve} />
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default ServiceCard;
