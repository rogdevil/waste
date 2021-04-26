import React from 'react'
import './index.css'

export default function FadedButton({text, handleClick}) {
    return (
        <div className="faded-button" onClick={(handleClick) ? handleClick : () => {console.log('nofunction')}}>
            <p>{text}</p>
        </div>
    )
}
