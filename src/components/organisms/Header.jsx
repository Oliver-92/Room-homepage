import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import './header.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
