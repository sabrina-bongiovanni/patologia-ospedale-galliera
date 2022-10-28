import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ResultCard.styles.scss';

const ResultCard = ({ patologie }) => {
  return (
    <div className="card-container">
      {patologie.map((patologia) => {
        const { id, title, text } = patologia;
        return (
          <div className="single-card-container" key={id}>
            <div className="card">
              <h4>{title}</h4>
              <p>{text}</p>
              <a href="#">
                leggi <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultCard;
