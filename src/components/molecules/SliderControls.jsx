import Icon from '../atoms/Icon';
import angleLeftIcon from '../../assets/images/icon-angle-left.svg';
import angleRightIcon from '../../assets/images/icon-angle-right.svg';
import './slider-controls.css';

function SliderControls({ onPrev, onNext }) {
  return (
    <div className="slider-controls" role="group" aria-label="Slider controls">
      <button 
        type="button"
        className="slider-controls__btn"
        onClick={onPrev}
        aria-label="Previous slide"
      >
        <img src={angleLeftIcon} alt="" aria-hidden="true" />
      </button>
      <button 
        type="button"
        className="slider-controls__btn"
        onClick={onNext}
        aria-label="Next slide"
      >
        <img src={angleRightIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}

export default SliderControls;
