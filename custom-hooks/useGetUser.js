import React, { useEffect, useState } from 'react'
import { userService } from '../services/userService'

export const useGetUser = (userId) => {

    const [user, setUser] = useState(null)
    const [isFetch, setIsFetch] = useState(true)

    useEffect(() => {
        fetchUser()
        return () => setIsFetch(false)
    }, [])

    async function fetchUser() {
        const user = await userService.getUserById(userId)
        if(isFetch) setUser(user)
    }

    return user
}
