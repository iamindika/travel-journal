import globeIcon from '../assets/images/globe-icon.png';

const Header = () => (
  <header className="header">
    <img 
      className="header-icon"
      src={globeIcon}
      alt="globe icon"
    />
    <h1 className="header-title">my travel journal.</h1>
  </header>
);

export default Header;