import React, { useState } from 'react'

export default function Form() {
    const [text, setText] = useState("Enter Text Here")
    const onchangehandler = (event) => {
        setText(event.target.value);
    }
    const up = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const lo = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const cl = () => {
        let newtext = ''
        setText(newtext)
    }
    const hd = () => {
        let txt = document.getElementById("textbox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    const re = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }


    return (
        <>
            <div className="mb-3">
                <label htmlFor="textbox" className="form-label"><h1>Enter Your Text</h1></label>
                <textarea className="form-control" onChange={onchangehandler} id="textbox" value={text} rows="3" placeholder="Enter Some Text" required autoFocus></textarea>
                <button className="btn btn-outline-success mx-2 my-2" onClick={up} >Convert To Uppercase </button>
                <button className="btn btn-outline-primary mx-2 my-2" onClick={lo} >Convert To Lowercase </button>
                <button className="btn btn-outline-dark  mx-2 my-2" onClick={hd} >Copy Text</button>
                <button className="btn btn-outline-secondary  mx-2 my-2" onClick={cl} >Clear The Text </button>
                <button className="btn btn-outline-info mx-2 my-2" onClick={re} >Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>The Text Contains {text.split(" ").length} Words And {text.length} Characters.</p>
                <p>You Can Read It In {text.split(" ").length * 0.008} Minuts </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something In The Text Box To Preview It Here"}</p>
            </div>
        </>
    )
}
