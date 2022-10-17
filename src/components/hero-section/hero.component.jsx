import "./hero.style.scss";
const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_section--text">
        <h1>We make your home calm</h1>
        <p>
          ComfyPlace is an interior design agency that specializes in designing
          and decorating small spaces.
        </p>
        <button>Find More</button>
      </div>
      <div className="hero_section--image"></div>
    </div>
  );
};

export default Hero;
