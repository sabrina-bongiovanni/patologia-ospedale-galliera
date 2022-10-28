import './NavBar.styles.scss';

const NavBar = ({ alphabet, onClickHandler, filterLetter }) => {
  return (
    <div className="navbar-container">
      {alphabet.map((element) => {
        const { id, letter } = element;

        const highlightButton = filterLetter === letter;

        return (
          <div
            className={`${
              highlightButton ? 'navbar-item-active navbar-tab' : 'navbar-tab'
            }`}
            key={id}
            onClick={() => {
              onClickHandler(letter);
            }}
          >
            {letter.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
