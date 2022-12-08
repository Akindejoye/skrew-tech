import Image from "next/image";

const TeamCardLarge = (props) => {
  const boxMain = {
    display: "flex",
    gap: "34.41px",
  };

  return (
    <>
      <div style={boxMain}>
        <div className="box">
          <div className="img-box">
            <Image src={props.img} alt="Picture of the author" />
          </div>
          <div className="text-box">
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <Image src={props.imgTwo} alt="Picture of the author" />
          </div>
          <div className="text-box">
            <h2>{props.nameTwo}</h2>
            <p>{props.descTwo}</p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <Image src={props.imgThree} alt="Picture of the author" />
          </div>
          <div className="text-box">
            <h2>{props.nameThree}</h2>
            <p>{props.descThree}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCardLarge;
