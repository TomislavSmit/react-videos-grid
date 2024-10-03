export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    favorites: string[]
}

export interface UserLogin {
    email: string
    password: string
}
