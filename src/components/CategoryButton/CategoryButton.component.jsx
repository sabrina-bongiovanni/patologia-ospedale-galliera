import '../CategoryButton/CategoryButton.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryButton = ({
  bodyCategories,
  patologie,
  onClickHandler,
  clickButton,
}) => {
  return (
    <div className="categories-section-buttons">
      {bodyCategories.map((bodyCategory) => {
        const { id, icon, title } = bodyCategory;

        const highlightButton = clickButton === title;

        return (
          <div
            className={`${
              highlightButton
                ? 'category-button-active button category-button'
                : 'button category-button'
            } `}
            key={id}
            onClick={() => {
              onClickHandler(title);
            }}
          >
            <div className="icon-container">
              <FontAwesomeIcon icon={icon} />
            </div>
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryButton;
