import React, { useState, useEffect } from 'react'
import { saveAs } from 'file-saver';
import PropTypes from "prop-types"
export default function Form(props) {
    const [text, setText] = useState("")
    const onchangehandler = (event) => {
        setText(event.target.value);
    }

    const up = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Converted To Uppercase", "Success")
    }
    const lo = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert("Converted To Lowercase", "Success")
    }
    const cl = () => {
        let newtext = ''
        setText(newtext)
        props.showalert("Text Cleared", "Success")
    }
    const hd = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showalert("Copied To Clipboard", "Success")
    }
    const re = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Space Removed", "Success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleAa = () => {
        let words = text.split(" ");
        let joinedWords = [];
        let capWord;

        words.forEach(function (element) {
            if (element[0] != undefined) {
                capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
                joinedWords += capWord + ' ';
            }
        })
        setText(joinedWords);
        props.showalert("Text Capitalized", "Success")
    }
    const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showalert("Text Reversed", "Success")
    }
    const generateRandomText = () => {
        const length = 100; // Adjust the desired length of your random string
        let randomText = '';

        // Generate random characters and append them to randomText
        for (let i = 0; i < length; i++) {
            const randomChar = String.fromCharCode(
                Math.floor(Math.random() * 26) + 97 // Generates lowercase letters
            );
            randomText += randomChar;
        }

        setText(randomText);
        props.showalert("Random Text Generated", "Success")
    }
    const download = () => {
        var FileSaver = require('file-saver');
        var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "welltext-download.txt")
        props.showalert("File Saved ", "Success")
    }


    return (
        <>
            <div className="mb-3">
                <textarea className="form-control" onChange={onchangehandler} id="textbox" value={text} rows="3" placeholder="Enter Some Text" required autoFocus></textarea>
                <button className="btn btn-outline-primary mx-2 my-4" onClick={generateRandomText} >Random Text</button>
                <button className="btn btn-outline-success mx-2 my-2" onClick={text.length > 0 ? up : null} >Convert To Uppercase </button>
                <button className="btn btn-outline-secondary mx-2 my-2" onClick={text.length > 0 ? handleAa : null} >Capitalize</button>
                <button className="btn btn-outline-info mx-2 my-2" onClick={text.length > 0 ? lo : null} >Convert To Lowercase </button>
                <button className="btn btn-outline-info mx-2 my-2" onClick={text.length > 0 ? reverseText : null} >Reverse Text</button>
                <button className="btn btn-outline-primary mx-2 my-2" onClick={text.length > 0 ? re : null} >Remove Extra Spaces</button>
                <button className="btn btn-outline-success mx-2 my-2" onClick={text.length > 0 ? speak : null} >Speak</button>
                <button className="btn btn-outline-secondary  mx-2 my-2" onClick={text.length > 0 ? hd : null} >Copy Text</button>
                <button className="btn btn-outline-primary  mx-2 my-2" onClick={text.length > 0 ? cl : null} >Clear The Text </button>
                <button className="btn btn-outline-success  mx-2 my-2" onClick={text.length > 0 ? download : null} >Download Text</button>
            </div>
            <div className="container">
                <hr />
                <h2 className={`text-${props.mode ? 'dark' : 'light'}  `}>Your Text Summary</h2>
                <hr />
                <p className='active'>
                    The Text Contains <span className='fw-bold '> {text.split(/\s+/).filter((word) => {
                        return word.length !== 0
                    }).length} Words</span> And <span className='fw-bold '>{text.length} Characters</span>. </p>
                <p>You Can Read It In <b> {text.split(/[ ]+/).filter((word) => {
                    return word.length !== 0
                }).length * 0.008} Minuts</b> </p>
                <hr />
                <h2 className='active'>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something In The Text Box To Preview It Here"}</p>
            </div>
        </>
    )
}