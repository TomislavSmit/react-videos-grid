export interface Movie {
    adult: boolean
    backdrop_path: null | string
    genre_ids: []
    id: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    title: string
    video: boolean
    ratings: [
        {
            id: string
            rating: number
        }
    ]
    release_date: string
}
