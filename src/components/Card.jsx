import icon from '../assets/images/map-pin-icon.png';
import PropTypes from 'prop-types'

const Card = ({ 
  title,
  location,
  mapURL,
  startDate,
  endDate,
  description,
  imageURL
}) => (
  <article className="card-wrapper container">
    <div className="card">
      <img
        className="card-image"
        src={imageURL}
        alt={title}
      />

      <div className="card-info">
        <p className="card-map">
          <img
            className="card-map-icon"
            src={icon}
            alt='map pin icon'
          />
          <span
            className="card-map-location"
          >{location}</span>
          <a 
            className="card-map-link"
            href={mapURL}
            target="_blank"
            rel="noopener noreferrer"
          >View on Google Maps</a>
        </p>
        
        <h2 className="card-title">
          {title}
        </h2>

        <p className="card-dates">
          {startDate} - {endDate}
        </p>

        <p className="card-description">
          {description}
        </p>
      </div>
    </div>
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  mapURL: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default Card;