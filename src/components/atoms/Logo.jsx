import logoSvg from '../../assets/images/logo.svg';
import './logo.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logoSvg} alt="room" />
    </div>
  );
}

export default Logo;
