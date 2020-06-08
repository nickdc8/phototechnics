import React, { useRef, useEffect } from 'react'

function Tour1() {
    const instance = useRef(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.setAttribute(
            "src",
            "https://static.kuula.io/embed.js"
            )
        script.async = true;
        script.setAttribute(
            "data-kuula",
            "https://kuula.co/share/collection/7lxHR?fs=1&vr=0&zoom=1&gyro=0&autorotate=0.04&thumbs=3&chromeless=1&logo=1&logosize=177"
        )
        script.setAttribute(
            "data-width",
            "100%"
        )
        script.setAttribute(
            "data-height",
            "640px"
        )
        instance.current.appendChild(script)
    }, [])

    return(
        <div ref={instance} />
    )
}

export default Tour1
