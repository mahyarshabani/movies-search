class DOMElements {
    constructor() {
    }

    get root() {
        return document.querySelector('#root');
    }

    get searchForm() {
        return document.querySelector('.search');
    }

    get searchInput() {
        return document.querySelector('.search__input');
    }

    get moviesContainer() {
        return document.querySelector('.movies-container');
    }

    get paginationContainer() {
        return document.querySelector('.pagination');
    }

    get currentPageButton() {
        return document.querySelector('.pagination__currentPage');
    }

    get previousPageButton() {
        return document.querySelector('.pagination__previous')
    }

    get nextPageButton() {
        return document.querySelector('.pagination__next');
    }
    get movieContainer() {
        return document.querySelector('.movie-detail');
    }

}

export default new DOMElements;
