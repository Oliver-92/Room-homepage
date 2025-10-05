import './about-section.css';
import darkImage from '../../assets/images/image-about-dark.jpg';
import lightImage from '../../assets/images/image-about-light.jpg';

function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-section__image-container">
        <img 
          src={darkImage} 
          alt="" 
          className="about-section__image"
          aria-hidden="true"
        />
      </div>

      <div className="about-section__content">
        <h2 id="about-title" className="about-section__title">About our furniture</h2>
        <p className="about-section__description">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>

      <div className="about-section__image-container">
        <img 
          src={lightImage} 
          alt="" 
          className="about-section__image"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default AboutSection;
