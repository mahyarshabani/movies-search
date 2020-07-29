import {initializeMoviesView} from './views/moviesView';
import initializeMoviesComponentController from './controllers/moviesListController';
import initializeMovieDetailComponentController from './controllers/movieDetailController';

import {initializeMovieDetailView} from './views/movieDetailView';

export const handleURL = (event) => {
    const pathName = window.location.pathname;
    if (pathName.length > 1) {
        initializeComponent('movieDetail');
    } else {
        initializeComponent('moviesList');
    }
}

const initializeComponent = (route) => {
    if (route === 'moviesList') {
        initializeMoviesView();
        initializeMoviesComponentController();
    } else {
        initializeMovieDetailView();
        initializeMovieDetailComponentController();
    }
}

export const pushUrl = (href) => {
    history.pushState({}, '', href);
    window.dispatchEvent(new Event('popstate'));
};
