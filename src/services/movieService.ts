import { fetchMovies, fetchMovieById } from '../api/movies'
import { Movie } from '../types/movie'

const filterUniqueMovies = (movies: Movie[]): Movie[] => {
    const uniqueMovieIds = new Set<Movie['id']>()

    return movies.filter((movie) => {
        const isUnique = !uniqueMovieIds.has(movie.id)

        if (isUnique) {
            uniqueMovieIds.add(movie.id)
        }

        return isUnique
    })
}

const sortMoviesByRating = (
    ratingId: 'imdb' | 'popularity',
    movies: Movie[]
) => {
    return movies.sort((a: Movie, b: Movie) => {
        const imdbRatingA =
            a.ratings.find((r) => r.id === ratingId)?.rating ?? 0
        const imdbRatingB =
            b.ratings.find((r) => r.id === ratingId)?.rating ?? 0

        return imdbRatingB - imdbRatingA
    })
}

const getMovies = async (
    page?: number,
    filterByRatingId?: 'imdb' | 'popularity'
): Promise<Movie[]> => {
    const data = await fetchMovies(page)

    if (!data) {
        return []
    }

    let moviesData = data

    if (filterByRatingId) {
        moviesData = filterUniqueMovies(data)
        moviesData = sortMoviesByRating(filterByRatingId, moviesData)
    }

    return moviesData
}

const getMovie = (id: string) => {
    return fetchMovieById(id)
}

export { getMovies, getMovie }
