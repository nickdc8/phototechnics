import React from 'react'

const style = {
    margin: '0 auto',
    padding: '0 16px',
    maxWidth: '1200px'
}

const Wrapper = ({ children }) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper