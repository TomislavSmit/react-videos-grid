import { useQuery } from '@tanstack/react-query'
import MovieList from '../components/movie/MovieList'
import { getMovies } from '../services/movieService'
import Spinner from '../components/UI/Spinner'
import Layout from '../themes/Layout'

const MoviesPage = () => {
    const {
        data: movies,
        error,
        isLoading,
    } = useQuery({
        queryKey: ['movies'],
        queryFn: () => getMovies(0, 'imdb'),
    })

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!movies?.length) {
        return <div>No movies found</div>
    }

    return (
        <Layout>
            <MovieList movies={movies} />
        </Layout>
    )
}

export default MoviesPage
