import React, { useState, useEffect } from 'react'
import { saveAs } from 'file-saver';
import PropTypes from "prop-types"
import '../../src/App.css';
export default function Form(props) {
    const [text, setText] = useState("")
    const [history, setHistory] = useState([]);
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const onchangehandler = (event) => {
        let newtext = event.target.value;
        setText(newtext);
        setUndoStack([...undoStack, newtext]);
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
    const removeextralines = () => {
        let shorttext = text.replace(/^\s*[\r\n]/gm, "")
        setText(shorttext)
        props.showalert("Extra Lines Removed", "Success")
    }
    const removeDuplicateWords = () => {
        // Split the input string into an array of words
        const words = text.split(/\s+/);

        // Create a Set to store unique words
        const uniqueWords = new Set(words);

        // Join the unique words back into a string and return
        let newtext = Array.from(uniqueWords).join(' ');
        setText(newtext)
        props.showalert("Duplicate Words Removed", "Success")
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
        let randomText = "Lorem \n  Lorem        ipsum      \n \n     Lorem        ipsum         amet          consectetur         adipisicing        elit. Quis           dolorem           id                distinctio nobis praesentium            et excepturi           voluptates inventore! Obcaecati nemo porro           Lorem        ipsum                       dolor sit    , autem voluptate dolor                expedita. Esse          Lorem        ipsum                       dolor sit            accusamus sequi              eveniet tempora       laboriosam, quod laudantium quasi deleniti repellendus quidem sit quis pariatur!"
        setText(randomText);
        props.showalert("Random Text Generated", "Success")
    }
    const download = () => {
        var FileSaver = require('file-saver');
        var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "welltext-download.txt")
        props.showalert("File Saved ", "Success")
    }
    let textboxstyle = {
        backgroundColor: 'grey'
    }
    const removelines = () => {
        let newText = text.replace(/\r?\n|\r/g, "");
        setText(newText)
        props.showalert("Converted To Single Line", "Success")
    }
    const removepunctuation = () => {
        let newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        setText(newText)
        props.showalert("Punctuation Removed", "Success")
    }
    const removeaccent = () => {
        let newText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        setText(newText)
        props.showalert("Accent Removed", "Success")
    }
    const NumberExtractor = () => {
        let replaced = text.replace(/\D+/g, '')
        setText(replaced)
        props.showalert("Numbers Extracted", "Success")
    }
    const encode = () => {
        let newtext = btoa(text);
        setText(newtext)
        props.showalert("Encoded To Base64", "Success")
    }
    const decode = () => {
        let newtext = atob(text);
        setText(newtext)
        props.showalert("Decoded To Base64", "Success")
    }
    let TextStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        // backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }
    const handleUndo = () => {
        if (undoStack.length > 1) {
            const currentText = undoStack.pop();
            setRedoStack([...redoStack, currentText]);
            setText(undoStack[undoStack.length - 1]);
            setUndoStack([...undoStack]);
        }
        props.showalert("Action Undo", "Success")
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextText = redoStack.pop();
            setUndoStack([...undoStack, text]);
            setText(nextText);
            setRedoStack([...redoStack]);
        }
        props.showalert("Action Redo", "Success")
    };
    return (
        <>
            <div className="mb-2 ">
                <label htmlFor="textbox" className="form-label my-2  " style={TextStyle} ><h1>Try Welltext - The Free And Fast Text Analyzer Tool</h1></label>

                <p className="text-capitalize container  " style={TextStyle}>
                    Welcome to WellText, your go-to text editing tool for all your needs. WellText provides a user-friendly platform to enhance your writing experience. With a lot of tools, WellText empowers you to create polished and error-free content effortlessly.Also,WellText Dosen't Require Any Sign Up Or Money.It Means That Tou Can Enjoy This Site Without Any Problem. Your Suggestions Are Always Welcome.Many More Features Are Comming Soon.
                    </p>
                <textarea className={`form-control `} id='textbox' spellCheck="true" onChange={onchangehandler} value={text} rows="4" placeholder="Enter Some Text" required autoFocus style={props.mode === 'dark' ? textboxstyle : null}></textarea>
                
                <div className="container my-4 alert alert-info ">
                    <b>Note : </b> The Remove All Lines Button Joins The All Text Into One Line One Line.It Also Can Be Used For Compressing Html,Css And Javascript.
                </div>

                <button className="btn btn-outline-primary mx-2 my-2 " onClick={generateRandomText} >Demo Text</button>
                <button className="btn btn-outline-success mx-2 my-2 " onClick={up} >Convert To Uppercase </button>
                <button className="btn btn-outline-success mx-2 my-2 " onClick={handleUndo} disabled={undoStack.length <= 1}>Undo </button>
                <button className="btn btn-outline-success mx-2 my-2 " onClick={handleRedo} disabled={undoStack.length <= 1}>Redo</button>
                <button className="btn btn-outline-success mx-2 my-2 " >Undo </button>
                <button className="btn btn-outline-success mx-2 my-2 " >Redo</button>
                <button className="btn btn-outline-info mx-2 my-2 " onClick={handleAa} >Capitalize</button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={lo} >Convert To Lowercase </button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={NumberExtractor} >Extract Number</button>
                <button className="btn btn-outline-success mx-2 my-2 " onClick={reverseText} >Reverse Text</button>
                <button className="btn btn-outline-info mx-2 my-2 " onClick={re} >Remove Extra Spaces</button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={speak} >Speak</button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={removeextralines} >Remove Empty Lines</button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={encode} >Encode To Base64</button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={decode} >Decode To Base64</button>
                <button className="btn btn-outline-success mx-2 my-2 " onClick={text.length > 0 ? removeDuplicateWords : null} >Remove Duplicate Words</button>
                <button className="btn btn-outline-info mx-2 my-2 " onClick={text.length > 0 ? removelines : null} >Remove All Lines</button>
                <button className="btn btn-outline-primary mx-2 my-2 " onClick={text.length > 0 ? removepunctuation : null} >Remove Punctuation</button>
                <button className="btn btn-outline-success mx-2 my-2 " onClick={text.length > 0 ? removeaccent : null} >Remove Accents</button>
                <button className="btn btn-outline-success  mx-2 my-2 " onClick={text.length > 0 ? hd : null} >Copy Text</button>
                <button className="btn btn-outline-info  mx-2 my-2 " onClick={text.length > 0 ? download : null} >Download Text</button>
                <button className="btn btn-outline-secondary mx-2 my-2 " onClick={text.length > 0 ? cl : null} >Clear The Text </button>
            </div >
            <div className="container">
                <hr />
                <h2 style={TextStyle}>Your Text Summary</h2>
                <hr />
                <p className='active' style={TextStyle}>
                    The Text Contains <span>{text.length > 0 ? text.split(/\r\n|\r|\n/).length : text.split(/\r\n|\r|\n/).length = 0} Lines</span><span className='fw-bold '> {text.split(/\s+/).filter((word) => {
                        return word.length !== 0
                    }).length} Words</span> And <span className='fw-bold '>{text.length} Characters</span>. </p>
                <p style={TextStyle}>You Can Read It In <b> {text.split(/[ ]+/).filter((word) => {
                    return word.length !== 0
                }).length * 0.008} Minuts</b> </p>
                <hr />
                {/* <h2 className='active'>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something In The Text Box To Preview It Here"}</p> */}
            </div>
        </>
    )
}