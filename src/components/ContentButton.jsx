import React from 'react'

export default function ContentButton(props) {
    return (
        <button className="content--button">
            {props.text}
        </button>
    )
}
