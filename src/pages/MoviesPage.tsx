import { useInfiniteQuery } from '@tanstack/react-query'
import MovieList from '../components/movie/MovieList'
import Spinner from '../components/UI/Spinner'
import React, { useEffect } from 'react'
import Layout from '../themes/Layout'
import { getMovies } from '../services/movieService'

const MoviesPageInfiniteScroll = () => {
    const { status, data, error, fetchNextPage } = useInfiniteQuery({
        queryKey: ['movies', 'page'],
        queryFn: async ({ pageParam }) => await getMovies(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next,
    })

    useEffect(() => {
        const handleScroll = () => {
            if (
                document.body.scrollHeight - 1 <
                window.scrollY + window.innerHeight
            ) {
                fetchNextPage()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [fetchNextPage])

    if (status === 'pending') {
        return <Spinner />
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!data?.pages?.length) {
        return <div>No movies found</div>
    }

    return (
        <Layout>
            {data.pages.map((page, index) => {
                return (
                    <React.Fragment key={index}>
                        <MovieList movies={page.data} />
                    </React.Fragment>
                )
            })}
        </Layout>
    )
}

export default MoviesPageInfiniteScroll
