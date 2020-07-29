import Config from './../config';

export default class Movie {
    constructor() {
        this.detail = {};
    }

    async getSingleMovie(id) {
        try {
            const res = await (await fetch(`http://www.omdbapi.com/?apiKey=${Config.apiKey}&i=${id}`)).json()
            this.detail = res;
        } catch (error) {
            console.log(error);
        }
    }
}
