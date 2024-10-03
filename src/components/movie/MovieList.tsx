import { useCallback, useContext, useEffect } from 'react'
import { imageBaseUrl } from '../../config/image.ts'
import { formatDate } from '../../utils/format-date.ts'
import { Movie } from '../../types/movie.ts'
import { toggleAddMovieToFavorites } from '../../services/userService.ts'
import AuthContext from '../../context/auth.tsx'
import { handleKeyboardNavigation } from '../../utils/handle-keyboard-navigation'
import Card from '../UI/Card'

const MovieList = ({ movies }: { movies: Movie[] }) => {
    const { user, setUser } = useContext(AuthContext)

    const favorites = user?.favorites

    const handleAddToFavorites = useCallback(
        async (id: string) => {
            if (!user) {
                return
            }

            const response = await toggleAddMovieToFavorites(user, id)
            setUser(response)
        },
        [user, setUser]
    )

    useEffect(() => {
        const firstItem = document.querySelectorAll(
            '.movie-grid-item'
        )[0] as HTMLElement

        if (firstItem) {
            firstItem.focus()
        }
    }, [])

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const movieId = handleKeyboardNavigation(event)

            if (movieId) {
                handleAddToFavorites(movieId)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [handleAddToFavorites])

    return (
        <div className='flex flex-wrap p-6' role='grid'>
            {movies.map((movie, index) => {
                const imgUrl = `${imageBaseUrl}${movie.poster_path}`
                const { title } = movie
                const date = formatDate(movie.release_date)
                const isFavorite = favorites?.includes(movie.id) || false

                return (
                    <div
                        className={`
                            movie-grid-item w-1/6 p-2 
                            cursor-pointer shadow-md rounded outline-none
                            transition
                            focus:scale-110 focus:bg-blue-400 
                            hover:scale-110 hover:bg-blue-400`}
                        id={movie.id}
                        key={movie.id}
                        onClick={() => handleAddToFavorites(movie.id)}
                        tabIndex={index + 1}
                    >
                        <Card
                            image={imgUrl}
                            title={title}
                            date={date}
                            favorite={isFavorite}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList
