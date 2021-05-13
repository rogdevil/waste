import React, { useEffect, useState } from 'react';
import './index.css';
import { SimpleInput } from './inputs';
import { ActiveButton } from './buttons';
import FadedButton from './buttons/FadedButton';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const globalState = useSelector(state => state)
    const history = useHistory()

    const gotoLogin = () => {
        dispatch({
            type: "UPDATE_DATA",
            payload: {
                name: name,
                email: email,
                password: password,
            }
        })
    }

    const gotoUser = () => {
        history.push('/user')
    }

    useEffect(() => {
        console.log(globalState)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="login-wrapper">
            <div className='brand-image'>
                <h1>Register</h1>
            </div>
            <div className='login-form'>
                <SimpleInput type='text' placeholder='Name' setValue={setName} />
                <SimpleInput type='email' placeholder='Email' setValue={setEmail} />
                <SimpleInput type='password' placeholder='Password' setValue={setPassword} />

                <ActiveButton text='User Page' handleClick={gotoUser} />

                <p className="subtext">OR</p>

                <FadedButton text='Save' handleClick={gotoLogin} />
            </div>
        </div>
    )
}