import React from 'react'
import ContentButton from './ContentButton'

export default function ContentBox() {
    const buttonText = [
        'actions', 
        'spells',
        'equipment',
        'features & traits',
        'description',
        'notes',
        'extras'
    ]

    const buttons = buttonText.map(button => <ContentButton text={button}/>)
    
    return (
        <div className="content-box">
            <div className="content--buttons-wrapper">
                {buttons}
            </div>
        </div>
    )
}
