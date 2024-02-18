import React from 'react'

export default function Footer(props) {
    let mainStyle = {
        color: props.mode === 'dark' ? 'white' : 'dark',
        backgroundColor: props.mode === 'dark' ? 'dark' : 'white',
        height: '25px'
    }
    return (
        <div className='container mt-0' style={mainStyle}>
            This Is
        </div>
    )
}