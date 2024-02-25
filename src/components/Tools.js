import React from 'react'

export default function Tools(props) {
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }
    return (
        <>
            <h1 className={` container text-${props.mode === 'light' ? 'black' : 'white'}`}>Our Tools</h1>
            <p className={` container text-${props.mode === 'light' ? 'black' : 'white'}`}>Our Site Provide Various Tools For Analyze Your Text. Here Is The Full Detail Of The All Tools. </p>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Generate Random Text</h5>
                            <p className="card-text">Generates Random Text To Explore The Tools Quickly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 ">
                    <div className="card " style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Convert To Uppercase</h5>
                            <p className="card-text">Convertes The Input Text To Uppercase</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Convert To Lowercase</h5>
                            <p className="card-text">Convertes The Input Text To Lowercase</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Capitalize</h5>
                            <p className="card-text">Capitalize The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Reverse Text</h5>
                            <p className="card-text">Reverse The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Extra Spaces</h5>
                            <p className="card-text">Removes Extra Spaces From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Speak</h5>
                            <p className="card-text">This Tool Speaks The Given Text </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Empty Lines</h5>
                            <p className="card-text">This Tool Remove Extra Lines From Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Duplicate Words</h5>
                            <p className="card-text">This Tool Is Helpfull To Remove Duplicate Words From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove All Lines</h5>
                            <p className="card-text">This Tool Convert Multipal Lines Into Single Line</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Punctuation</h5>
                            <p className="card-text">This Tool is Helpfull To Remove Punctuation From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Accents</h5>
                            <p className="card-text">This Tool is Helpfull To Remove Accents From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Copy Text</h5>
                            <p className="card-text">This Tool Copies Analyzed Text To Clipboard</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Download Text</h5>
                            <p className="card-text">This Tool Download The Analyzed Text Tn .txt File</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Clear Text</h5>
                            <p className="card-text">Clear The Input Field</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
