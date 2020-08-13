import React, { useState } from 'react'

export default function favorite() {
    const [state, setState] = useState({ liked: false })

    function handleClick() {
        setState({ like: !false })
    }

    return (
    const text = state.liked ? "liked" : "haven't liked";
    const label = this.state.liked ? "unfavorite" : "favorite";

    <div>
        <button className='btn-red' onClick={handleClick}>
            {label}
        </button>
    </div >
)
}
