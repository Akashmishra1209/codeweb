import React from 'react'

export default function Footer(props) {
    let mainStyle = {
        color: props.mode === 'dark' ? 'white' : 'dark',
        backgroundColor: props.mode === 'dark' ? 'dark' : 'white',
        height: '25px'
    }
    return (
        <footer className={`bg-body-tertiary text-center  `} style={{mainStyle}}>
          
        </footer>
    )
}