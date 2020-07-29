import Movies from './models/Movies';
import DOMElements from './views/dom';
import {getSearchInputValue} from './views/searchView';
import {renderMovies, clearMovies, initializeMoviesView} from './views/moviesView';
import {renderPagination} from './views/paginationView';
import initializeMoviesComponentController from './controllers/moviesListController';
import {handleURL} from './navigate';

window.onload = () => {
    handleURL(null);
};


window.addEventListener('popstate', (event) => {
    handleURL(event);
});





