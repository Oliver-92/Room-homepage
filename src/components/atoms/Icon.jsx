import './icon.css';

function Icon({ src, alt, onClick, className = '' }) {
  return (
    <button 
      type="button"
      className={`icon ${className}`}
      onClick={onClick}
      aria-label={alt}
    >
      <img src={src} alt="" aria-hidden="true" />
    </button>
  );
}

export default Icon;
