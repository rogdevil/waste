import React from 'react'

export default function TableItem({avtar, id, fname, lname, email}) {
    return (
        <div className="user_row">
            <div className="user_avtar">
                <img src={avtar} alt="user_image" />
            </div>
            <div className="user_id">
                {id}
            </div>
            <div className="user_fname">
                {fname}
            </div>
            <div className="user_lname">
                {lname} 
            </div>
            <div className="user_email">
                {email}
            </div>
        </div>
    )
}
