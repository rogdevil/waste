import React from 'react'
import { useSelector } from 'react-redux'

export default function UserInfo() {
    const globalState = useSelector(state => state)

    return (
        <div>
            <h1>here we are showing user info</h1>
            <p>Name: <span>{globalState.name}</span></p>
            <p>Email: <span>{globalState.email}</span></p>
            <p>Password: <span>{globalState.password}</span></p>
        </div>
    )
}
