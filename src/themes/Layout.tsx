import { NavLink } from 'react-router-dom'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='container mx-auto flex flex-col justify-center w-[1280px]'>
            <nav className='bg-zinc-900 fixed top-0 z-20 w-full p-4'>
                <NavLink
                    to='/'
                    className='p-4 mr-6 text-blue-500 hover:text-blue-800 space-x-3'
                >
                    Movies list
                </NavLink>
                <NavLink
                    to='/sorted-by-rating'
                    className='p-4 mr-6 text-blue-500 hover:text-blue-800'
                >
                    Movies Sorted By Rating
                </NavLink>
            </nav>
            <div className='mt-16'>{children}</div>
        </div>
    )
}

export default Layout
