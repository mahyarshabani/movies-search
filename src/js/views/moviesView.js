import DOMElements from './dom';


export const initializeMoviesView = () => {
    DOMElements.root.innerHTML = `
<div class="container">
    <div class="row mt-5 justify-content-center">
        <i class="fa fa-bin"></i>
        <div class="col-12 col-md-8">
            <form action="" class="search">
                <i class="search__icon lni lni-search-alt"></i>
                <input class="search__input" type="text" placeholder="Search movie, actor, genre & etc">
            </form>
        </div>
    </div>
    <div class="row movies-container">
    
    </div>
    <div class="pagination"></div>

</div>`
}

export const renderMovies = (data) => {
    let allMovies = '';
    data.forEach(movie => {
        const html = `
               <div class="col-6 col-md-4 col-lg-2 mt-2">
            <a class="movie"  href="/${movie.imdbID}" data-id="${movie.imdbID}">
                <div class="movie__pic">
                    <img src="${movie.Poster}" alt="">
                </div>
                <div>
                    <h6 class="movie__title">${movie.Title}</h6>
                    <div class="movie__year">${movie.Year}</div>
                    <div class="movie__type">${movie.Type}</div>
                </div>
            </a>
        </div>
        `;
        allMovies = allMovies + html;
    })

    DOMElements.moviesContainer.insertAdjacentHTML('beforeend', allMovies);
}

export const clearMovies = (data) => {
    DOMElements.moviesContainer.innerHTML = '';
}

export const showError = (err) => {
    DOMElements.moviesContainer.innerHTML = `<p class="text-center">${err}</p>`;
}
