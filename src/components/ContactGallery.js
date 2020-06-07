import React from 'react'
import image1 from '../img/gallery1.jpg'
import image2 from '../img/gallery2.jpg'
import image3 from '../img/gallery3.jpg'
import image4 from '../img/gallery4.jpg'
import styled from '@emotion/styled'

const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 78px;
    height: 10px;
    @media (max-width: 900px) {
        display: none;
      }
`

const ImageGallery = () => {
    return(
        <Gallery>
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
        </Gallery>
    )
}

export default ImageGallery