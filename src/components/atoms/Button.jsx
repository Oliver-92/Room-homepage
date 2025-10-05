import './button.css';
import arrowIcon from '../../assets/images/icon-arrow.svg';

function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button 
      type="button"
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      <span className="btn__text">{children}</span>
      <img src={arrowIcon} alt="" className="btn__icon" aria-hidden="true" />
    </button>
  );
}

export default Button;
