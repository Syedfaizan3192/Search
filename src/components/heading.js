import React from 'react'
import './season.css'

const Heading = props => {
    return (
        <div className='heading'>
            <p>{props.heading}</p>
        </div>
    )
}

export default Heading