import React from 'react'
import styled from '@emotion/styled'

const Iframe = styled.iframe`
    margin-bottom: 40px
`

function Tour360({src}) {
    return(
        <Iframe
            width="100%" 
            height="440" 
            allow="vr,gyroscope,accelerometer,fullscreen" 
            scrolling="no" 
            src={src}>
        </Iframe>
    )
}

export default Tour360