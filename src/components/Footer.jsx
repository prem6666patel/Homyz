import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 new york , FL 4571,USA</span>

          <div className="flexCenter f-menu ">
            <span>property</span>
            <span>services</span>
            <span>product</span>
            <span>about us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
