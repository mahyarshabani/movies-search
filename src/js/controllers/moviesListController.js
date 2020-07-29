import DOMElements from '../views/dom';
import {getSearchInputValue} from '../views/searchView';
import Movies from '../models/Movies';
import {clearMovies, renderMovies, showError} from '../views/moviesView';
import {renderPagination, clearPagination} from '../views/paginationView';
import {pushUrl} from '../navigate'

export default () => {
    let state = {}
    let timer;

    DOMElements.searchInput.addEventListener('input', (event) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            let event = new Event('submit', {bubbles: true});
            DOMElements.searchForm.dispatchEvent(event);
        }, 1000)
    });

    DOMElements.searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = getSearchInputValue();
        state.query = query;
        state.page = 1;
        const movies = new Movies();
        if (query) {
            try {
                await movies.getMovies(state.page, query);
                const result = movies.items;
                if (result) {
                    clearMovies();
                    renderMovies(result);
                    renderPagination(movies.totalItems, state.page)
                } else {
                    clearPagination();
                    clearPagination();
                    showError(movies.error);
                }

            } catch (e) {
                console.log(e)
            }
        }

    })


    DOMElements.moviesContainer.addEventListener('click', async (event) => {
        event.preventDefault();
        const p = event.target.closest('[data-id]').matches('[data-id]');
        if (p) {
            pushUrl(`/${event.target.closest('[data-id]').dataset.id}`)
        }
    })

    DOMElements.paginationContainer.addEventListener('click', async (event) => {
        event.preventDefault();
        const p = event.target.matches('.pagination__next') || event.target.matches('.pagination__previous');
        if (p) {
            const query = getSearchInputValue();
            state.query = query;
            state.page = event.target.dataset.targetpage;
            const movies = new Movies();
            if (query) {
                try {
                    await movies.getMovies(state.page, query);
                    const result = movies.items;
                    clearMovies();
                    renderMovies(result);
                    renderPagination(movies.totalItems, state.page)
                } catch (e) {
                    alert(e);
                }
            }
        }

    })
}
