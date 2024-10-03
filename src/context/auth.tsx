import { createContext, useEffect, useState } from 'react'
import { getUser } from '../services/userService'
import { User } from '../types/user'
import Spinner from '../components/UI/Spinner'

interface AuthContextProps {
    user: User | null | undefined
    setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextProps>({
    user: undefined,
    setUser: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const userData = await getUser()

                setUser(userData)
            } catch (error) {
                console.error('Failed to check authentication:', error)
            } finally {
                setLoading(false)
            }
        }

        verifyAuth()
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext
