import { Route, BrowserRouter, Routes } from 'react-router-dom'
import MoviesPageSorted from '../pages/MoviesPageSorted'
import MoviesPage from '../pages/MoviesPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MoviesPage />} />
                <Route
                    path='/sorted-by-rating'
                    element={<MoviesPageSorted />}
                />
                <Route path='*' element={<p>Not found</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
