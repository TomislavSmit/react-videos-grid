import { Movie } from '../types/movie'

export const removeDuplicates = (movies: Movie[]) => {
    const movieIds = new Set()

    return movies.filter((movie) => {
        if (movieIds.has(movie.id)) {
            return false
        }
        movieIds.add(movie.id)

        return movie
    })
}
