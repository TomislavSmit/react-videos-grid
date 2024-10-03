import { axiosInstance } from '../config/axios'
import { Movie } from '../types/movie'
import { User } from '../types/user'

const PER_PAGE = 36

const fetchMovies = async (page?: number): Promise<Movie[] | null> => {
    const params = new URLSearchParams()

    if (page) {
        params.set('_page', String(page))
        params.set('_per_page', String(PER_PAGE))
    }

    try {
        const { data } = await axiosInstance.get<Movie[]>(
            `/movies?${params.toString()}`
        )

        return data
    } catch {
        return null
    }
}

const fetchMovieById = async (id: string): Promise<Movie | null> => {
    try {
        const { data } = await axiosInstance.get<Movie>(`/movies/${id}`)

        return data
    } catch {
        return null
    }
}

const updateFavorites = async ({
    user,
    movieId,
}: {
    user: User
    movieId: string
}): Promise<User | null> => {
    const newFavorites = user.favorites.includes(movieId)
        ? user.favorites.filter((id) => id !== movieId)
        : [...user.favorites, movieId]

    const response = await axiosInstance.patch('/users/1', {
        favorites: newFavorites,
    })

    return response.data
}

export { fetchMovies, fetchMovieById, updateFavorites }
