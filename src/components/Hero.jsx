import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-cirlce"></div>
            <h1>
              Discover <br /> Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              find a variety of Properties that suit you very easily
            </span>
            <br />
            <span className="secondaryText">
              forget all difficulties in finding a Residencies for you
            </span>
          </div>

          <div className="search-bar">
            <input type="text" />
            <button className="button btn">search</button>
          </div>

          <div className="flexCenter status">
            <div className="flexCenter stat">
              <span>premium products</span>
              <span>happy customers</span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
