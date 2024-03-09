import React from 'react'

export default function Blog(props) {
    let TextStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
    }
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        border: props.mode === 'dark' ? 'none' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }
    return (
        <>
            <h1 style={TextStyle}>All Updates</h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" >
                        <div class="card-body"style={myStyle}>
                            <h5 class="card-title"><strong>3/9/2024</strong></h5>
                            <div class="card-text">
                                <b>Launching : </b>
                                <span>WellText Is A Fast And Quick Text Analyzer Tool.It Has Many Features For Analyze And  Manipulate Your Text.Many More Features Are Upcomming.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
