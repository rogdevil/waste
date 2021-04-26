import React from 'react'
import './index.css'

export default function SimpleInput({type, placeholder, setValue}) {

    const updateInput = (event) => {
        setValue(event.target.value)
        // console.log('local change')
    }

    return (
        <div className="simple-input">
            <input type={type} placeholder={placeholder} onChange={updateInput} />
        </div>
    )
}
