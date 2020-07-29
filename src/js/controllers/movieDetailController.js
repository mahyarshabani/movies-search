import DOMElements from '../views/dom';
import {getSearchInputValue} from '../views/searchView';
import Movies from '../models/Movies';
import Movie from '../models/Movie';
import {renderMovieDetail} from '../views/movieDetailView';

export default async () => {
    let state = {}
    const movie = new Movie();
    const id = window.location.pathname.substring(1, window.location.pathname.length);
    if (id) {
        try {
            await movie.getSingleMovie(id);
            const result = movie.detail;
            renderMovieDetail(result);
        } catch (e) {
            alert(e);
        }
    }


}
