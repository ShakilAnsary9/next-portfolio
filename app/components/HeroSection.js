const HeroSection = () => {
  return (
    <section className="hero__section p-0">
      <div className="hero__wrapper">
        <h1>
          <span>Architecting the</span>
          <br />
          <span className="title__tab">Next Generation of</span>
          <br />
          <span className="title__tab__second">Web Applications</span>
        </h1>
        <div className="blob"></div>
        <div className="hero__cta">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="intro">
                <p>
                  Welcome! I’m Shakil Ansary, a Frontend Developer adept in
                  WordPress and occasional design. With a knack for seamless
                  user experiences, I blend technical prowess with creative
                  vision. Let’s collaborate on crafting digital excellence!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <a href="">
                <div className="d-flex hero__btn">
                  <div className="btn__text">Got an Idea Let’s Talk</div>
                  <div className="btn__icon">
                    <i className="fi fi-rr-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
