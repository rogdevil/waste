import React from 'react'
import './index.css'

export default function ActiveButton({text, handleClick}) {
    return (
        <div className="active-button" onClick={(handleClick) ? handleClick : () => {console.log('nofunction')}}>
            <p>{text}</p>
        </div>
    )
}
