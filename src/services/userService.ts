import { updateFavorites } from '../api/movies'
import { fetchUser } from '../api/user'
import { User } from '../types/user'

const getUser = () => {
    return fetchUser()
}

const toggleAddMovieToFavorites = (user: User, movieId: string) => {
    return updateFavorites({ user, movieId })
}

export { getUser, toggleAddMovieToFavorites }
