import Config from './../config';

export default class Movies {
    constructor() {
        this.items = undefined;
        this.error = undefined;
    }

    async getMovies(page = 1, query = '') {
        try {
            const res = await (await fetch(`http://www.omdbapi.com/?apiKey=${Config.apiKey}&s=${query}&page=${page}`)).json()
            if (res.Search) {
                this.items = res['Search'];
                this.totalItems = res['totalResults'];
            } else if (res.Error) {
                this.error = res.Error;
            }
        } catch (error) {
            throw error;
        }
    }
}
