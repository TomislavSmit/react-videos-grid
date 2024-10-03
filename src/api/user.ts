import { User } from '../types/user'
import { axiosInstance } from '../config/axios'

// TODO: Add logic for fetching user after login...
const fetchUser = async (): Promise<User | null> => {
    try {
        const { data } = await axiosInstance.get<User>('/users/1')

        return data
    } catch {
        return null
    }
}

export { fetchUser }
