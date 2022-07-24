import React from 'react'
import ImageCard from './Imagecard'
import './season.css'

const Imageview = props => {
    const Images = props.Images.map((image) => {
        return <ImageCard key={image.id} image = {image} />
    })
    return <div className='container image-list'>{Images}</div>
}

export default Imageview