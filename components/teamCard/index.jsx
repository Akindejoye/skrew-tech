import Image from "next/image";

const TeamCard = ({ name, desc, img }) => {
  return (
    <>
      <div className="box">
        <div className="img-box">
          {/* <img src={img} alt="Software Engineer" /> */}
          <Image src={img} alt="Picture of the author" />
        </div>
        <div className="text-box">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
