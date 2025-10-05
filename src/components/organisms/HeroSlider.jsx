import { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import SliderControls from '../molecules/SliderControls';
import './hero-slider.css';

// Import images
import mobileHero1 from '../../assets/images/mobile-image-hero-1.jpg';
import mobileHero2 from '../../assets/images/mobile-image-hero-2.jpg';
import mobileHero3 from '../../assets/images/mobile-image-hero-3.jpg';
import desktopHero1 from '../../assets/images/desktop-image-hero-1.jpg';
import desktopHero2 from '../../assets/images/desktop-image-hero-2.jpg';
import desktopHero3 from '../../assets/images/desktop-image-hero-3.jpg';

const slides = [
  {
    id: 1,
    mobileImage: mobileHero1,
    desktopImage: desktopHero1,
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    id: 2,
    mobileImage: mobileHero2,
    desktopImage: desktopHero2,
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    id: 3,
    mobileImage: mobileHero3,
    desktopImage: desktopHero3,
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section 
      className="hero-slider" 
      aria-roledescription="carousel"
      aria-label="Featured products carousel"
    >
      <div className="hero-slider__image-container">
        <picture>
          <source media="(min-width: 768px)" srcSet={slide.desktopImage} />
          <img 
            src={slide.mobileImage} 
            alt={slide.title}
            className="hero-slider__image"
          />
        </picture>
        <div className="hero-slider__controls-mobile">
          <SliderControls onPrev={prevSlide} onNext={nextSlide} />
        </div>
      </div>

      <div className="hero-slider__content">
        <div 
          className="hero-slider__text" 
          aria-live="polite" 
          aria-atomic="true"
        >
          <h1 className="hero-slider__title">{slide.title}</h1>
          <p className="hero-slider__description">{slide.description}</p>
          <div className="visually-hidden" aria-live="polite" aria-atomic="true">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <Button>Shop now</Button>
        </div>
        <div className="hero-slider__controls-desktop">
          <SliderControls onPrev={prevSlide} onNext={nextSlide} />
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
