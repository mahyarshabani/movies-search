import DOMElements from './dom';

export const initializeMovieDetailView = () => {
    DOMElements.root.innerHTML = `
        <div class="container movie-detail mt-3">
        
</div>

    `;
}

export const renderMovieDetail = (data) => {
    let ratingHtml = '';
    data.Ratings.forEach(item => {
        let percent = '0';
        if (item.Value.includes('%')) {
            percent = item.Value;
        } else if (item.Value.includes('/')) {
            let multiple = parseFloat(item.Value.substring(item.Value.indexOf('/') + 1, item.Value.length));
            let number = item.Value.substring(0, item.Value.indexOf('/'));
            let p = parseFloat(number, 10) * (100/multiple);
            percent = p + '%'
        }
        ratingHtml += `                <div class="rating">
                    <div class="rating__des"><span class="rating__name">${item.Source}</span><span class="rating__percent">${item.Value}</span></div>
                    <div class="rating__total">
                        <div class="rating__completed" style="width: ${percent}"></div>
                    </div>
                </div>`
    });
    DOMElements.movieContainer.innerHTML = `
    <div class="row">
        <div class="col-12 col-lg-4">
            <div class="movie-detail__pic">
                <img src="${data.Poster}" alt="">
            </div>
        </div>
        <div class="col-12 col-lg-8">
            <div>
                <h3>${data.Title}</h3>
                <p>Year : ${data.Year}</p>
                <p>Released : ${data.Released}</p>
                <p>Director : ${data.Director}</p>
                <p>Genre : ${data.Genre}</p>
                <h4>Actors</h4>
                <p>${data.Actors}</p>
                <h4>Plot</h4>
                <p>${data.Plot}</p>
                <h4>Rating</h4>
                ${ratingHtml}
            </div>
        </div>

    </div>`;

}
