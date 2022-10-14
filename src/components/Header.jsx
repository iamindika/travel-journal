import globeIcon from '../assets/images/globe-icon.png';

const Header = () => (
  <header className="header row">
    <div className="container row row--center">
      <img 
        className="header-icon"
        src={globeIcon}
        alt="globe icon"
      />
      <h1 className="header-title">my travel journal.</h1>
    </div>
  </header>
);

export default Header;