import { useState } from 'react';
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'design-react-kit';
import {
  faArrowRight,
  faMagnifyingGlass,
  faBrain,
  faEye,
  faEarListen,
  faTooth,
  faHeart,
  faLungs,
  faVenusMars,
  faBone,
  faHand,
  faDroplet,
} from '@fortawesome/free-solid-svg-icons';

import CategoryButton from './components/CategoryButton/CategoryButton.component';
import NavBar from './components/NavBar/NavBar.component';
import ResultCard from './components/ResultCard/ResultCard.component';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const bodyCategories = [
    { id: 1, title: 'Cervello e sistema nervoso', icon: faBrain },
    { id: 2, title: 'Occhi', icon: faEye },
    { id: 3, title: 'Orecchie e naso', icon: faEarListen },
    { id: 4, title: 'Bocca, denti e lingua', icon: faTooth },
    { id: 5, title: 'Cuore e vasi sanguigni', icon: faHeart },
    { id: 6, title: 'Polmoni e bronchi', icon: faLungs },
    { id: 7, title: 'Fegato, stomaco e intestino', icon: faLungs },
    { id: 8, title: 'Reni e apparato endocrino', icon: faLungs },
    { id: 9, title: 'Apparato genitale', icon: faVenusMars },
    { id: 10, title: 'Ossa, muscoli e articolazioni', icon: faBone },
    { id: 11, title: 'Pelle, unghie e capelli', icon: faHand },
    { id: 12, title: 'Sangue e sistema linfatico', icon: faDroplet },
  ];

  const alphabet = [
    { id: 1, letter: 'a' },
    { id: 2, letter: 'b' },
    { id: 3, letter: 'c' },
    { id: 4, letter: 'd' },
    { id: 5, letter: 'e' },
    { id: 6, letter: 'f' },
    { id: 7, letter: 'g' },
    { id: 8, letter: 'h' },
    { id: 9, letter: 'i' },
    { id: 10, letter: 'l' },
    { id: 11, letter: 'm' },
    { id: 12, letter: 'n' },
    { id: 13, letter: 'o' },
    { id: 14, letter: 'p' },
    { id: 15, letter: 'q' },
    { id: 16, letter: 'r' },
    { id: 17, letter: 's' },
    { id: 18, letter: 't' },
    { id: 19, letter: 'u' },
    { id: 20, letter: 'v' },
  ];

  const patologie = [
    {
      id: 1,
      title: 'Abrasioni',
      bodypart: 'Pelle, unghie e capelli',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 2,
      title: 'Acalasia',
      bodypart: 'Fegato, stomaco e intestino',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 3,
      title: 'Acufeni',
      bodypart: 'Orecchie e naso',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 4,
      title: 'Blefarite',
      bodypart: 'Occhi',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 5,
      title: 'Calcoli',
      bodypart: 'Reni e apparato endocrino',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 6,
      title: 'Diabete',
      bodypart: 'Sangue e sistema linfatico',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 7,
      title: 'Endocardite',
      bodypart: 'Cuore e vasi sanguigni',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 8,
      title: 'Scarlattina',
      bodypart: 'Cervello e sistema nervoso',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 9,
      title: 'Osteoporosi',
      bodypart: 'Ossa, muscoli e articolazioni',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 10,
      title: 'Carie',
      bodypart: 'Bocca, denti e lingua',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 11,
      title: 'Polmonite',
      bodypart: 'Polmoni e bronchi',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 12,
      title: 'Candida',
      bodypart: 'Apparato genitale',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
  ];

  const [searchField, setSearchField] = useState('');
  const [clickButton, setClickButton] = useState('');
  const [filterLetter, setFilterLetter] = useState('');

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredPatologie = patologie.filter((patologia) => {
    return (
      patologia.title.toLowerCase().slice(0, 1).includes(filterLetter) &&
      patologia.title.toLowerCase().includes(searchField) &&
      patologia.bodypart.includes(clickButton)
    );
  });

  const onClickChange = (title) => {
    const selectedBodyCategory = title;
    setClickButton(selectedBodyCategory);
  };

  const onClickFilter = (letter) => {
    const selectedLetter = letter;
    setFilterLetter(selectedLetter);
  };

  const clearFilters = () => {
    setSearchField('');
    setClickButton('');
    setFilterLetter('');
  };

  const showClearButton = searchField || clickButton || filterLetter;
  return (
    <div className="App">
      <div className="patologie-page">
        <Container className="page-header box-shadow">
          <div className="breadcrumb-container">
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
                <span className="separator">/</span>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Prestazioni e patologie</a>
                <span className="separator">/</span>
              </BreadcrumbItem>
              <BreadcrumbItem active>Patologie</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="text-container">
            <div className="header-text">
              <h2>Cerca patologie</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                arcu molestie, rhoncus sapien id, venenatis turpis. Fusce ac
                congue odio
              </p>
            </div>
            <div className="link-container header-text">
              <p>
                Vai alla pagina della
                <br />
                <a href="#">
                  Ricerca Prestazioni <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </p>
            </div>
            <div className="search-box-group header-text">
              <div className="input-group-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                className="search-box"
                type="search"
                placeholder="Cerca patologia"
                onChange={onChangeSearch}
              />
            </div>
          </div>
        </Container>

        <Container className="categories-container">
          <div className="categories-section-title">
            <h3>Cerca patologia per zona del corpo</h3>
          </div>
          <CategoryButton
            bodyCategories={bodyCategories}
            patologie={patologie}
            onClickHandler={onClickChange}
            clickButton={clickButton}
          />
        </Container>

        <Container className="navbar-search-container">
          <div className="categories-section-title">
            <h3>Patologie in ordine alfabetico</h3>
          </div>
          <div className="patologie-navbar-section">
            <NavBar
              alphabet={alphabet}
              onClickHandler={onClickFilter}
              filterLetter={filterLetter}
            />
          </div>
        </Container>

        <Container className="search-result-container">
          {showClearButton && (
            <div className="clear-button-container">
              <Button
                color="primary"
                className="clear-button"
                onClick={clearFilters}
              >
                Pulisci filtri
              </Button>
            </div>
          )}
          <ResultCard patologie={filteredPatologie} />
        </Container>
      </div>
    </div>
  );
}

export default App;
