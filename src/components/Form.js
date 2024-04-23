import React, { useState } from 'react'
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

    const removeEmoji = () => {

        let newtext = text.replace(/[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F9B0}-\u{1F9B3}\u{1F9B5}\u{1F9B6}\u{1F9B8}\u{1F9B9}\u{1F9BB}-\u{1F9C0}\u{1F9C1}]/gu, '')
        setText(newtext)
        props.showalert("Emoji Removed", "Success")

    }
    const findAndReplace = () => {
        let wordToReplace = prompt("Enter The String To Find");
        let replacementWord = prompt("Enter The String To Replace");
        let regex = new RegExp("\\b" + wordToReplace + "\\b", "gi");
        let newText = text.replace(regex, replacementWord);
        // Output the newtext       
        setText(newText);
        props.showalert("Text Replaced ", "Success")

    }
    const Paste = async () => {
        // const urlRegex = /(https?:\/\/[^\s]+)/g;
        // let newtext= text.match(urlRegex) || [];
        // console.log(newtext)
        let pasteText = await navigator.clipboard.readText()
        setText(pasteText)
        props.showalert("Text Pasted", "Success")
    };
    const checkIndex = () => {
        let x = prompt("Enter the text");
        x.value <= 0 ? alert("The Number Dose Not Exists") : alert("The Text Is At " + text.indexOf(x))
    }
    const removeNumber = () => {
        const newtext = text.replace(/([0-9])\w+/g, '');
        setText(newtext);
        props.showalert("Numbers Removed", "Success");
    }
    const removeHtml = () => {
        const newtext = text.replace(/<\s*[^>]*>/gi, '')
        setText(newtext);
        props.showalert("Html Removed", "Success");
    }
    const extractLink = () => {
        const link = text.match(
            /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
        );
        if (link == null) {
            setText("")
        } else {
            let newtext = link.join("\n")
            setText(newtext)
        }
        props.showalert("Link Extracted", "Success");
    }
    const formatNumberWithCommas = () => {
        let newtext = text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setText(newtext)
        props.showalert("Numbers Formatted", "Success");
    }
    function toSentenceCase() {
        let txtArr = text.split(".")
        let newarr = txtArr.map(txt => {
            txt = txt.trim();
            return txt.length > 0 ? txt[0].toUpperCase() + txt.slice(1).toLowerCase() : ""
        })
        let finalText = newarr.join(". ")
        setText(finalText)
        props.showalert("Converted To Sentence Case", "Success");
    }
    const sort = () => {
        let sorting = text.split(" ");
        sorting = sorting.sort();
        let mem = "";
        for (let i of sorting) {
            mem += i + " ";
        }
        setText(mem);
        props.showalert("Sorted In Alphbetical Order", "Success");
    };
    function handleCount() {
        let c = 0;
        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);
            if ((char == 'a') || (char == 'A') || (char == 'e') || (char == 'E') || (char == 'i') || (char == 'I') || (char == 'o') || (char == 'O') || (char == 'u') || (char == 'U')) {
                c = c + 1;
            }
        }
        return c;
    }
    return (
        <>

            <div className="mb-2 ">
                <label htmlFor="textbox" className="form-label my-2" style={TextStyle} ><h1>Try Welltext - The Free And Fast Text Analyzer And Text Manipulation Tool </h1></label>
                <p className="text-capitalize container  " style={TextStyle}>
                    Welcome to WellText, your go-to text editing tool for all your needs. WellText provides a user-friendly platform to enhance your writing experience. With a lot of tools, WellText empowers you to create polished and error-free content effortlessly.Also,WellText Dosen't Require Any Sign Up Or Money.It Means That You Can Enjoy This Site Without Any Problem. Your Suggestions Are Always Welcome.Many More Features Are Coming Soon.
                </p>
                <textarea className={`form-control `} id='textbox' spellCheck="true" onChange={onchangehandler} value={text} rows="4" placeholder="Enter Some Text" required autoFocus style={props.mode === 'dark' ? textboxstyle : null}></textarea>

                <div className="container my-4 alert alert-info ">
                    <b>Note : </b> The Remove All Lines Button Joins The All Text Into  One Line.It Also Can Be Used For Compressing Html,Css And Javascript.
                </div>
                <button className={`btn btn-outline-primary  mx-2 my-2 `} onClick={generateRandomText} >Demo Text</button>
                <button className={`btn btn-outline-success mx-2 my-2`} onClick={up} >Convert To Uppercase </button>
                <button className={`btn btn-outline-success mx-2 my-2`} onClick={handleUndo} >Undo </button>
                <button className={`btn btn-outline-success mx-2 my-2`} onClick={handleRedo}>Redo</button>
                <button className={`btn btn-outline-info mx-2 my-2 " `} onClick={handleAa} >Capitalize</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={lo} >Convert To Lowercase </button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={toSentenceCase} >Convert To Sentence Case </button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={sort} >Sort Text </button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={NumberExtractor} >Extract Number</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={extractLink} >Extract Links</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={removeHtml} >Remove Html</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={checkIndex} >Find Index</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={formatNumberWithCommas} >Formate Numbers</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={speak} >Speak</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={Paste} >Paste From Clipboard</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={findAndReplace} >Find And Replace</button>
                <button className={`btn btn-outline-success mx-2 my-2`} onClick={reverseText} >Reverse Text</button>
                <button className={`btn btn-outline-info mx-2 my-2 " `} onClick={re} >Remove Extra Spaces</button>
                <button className={`btn btn-outline-info mx-2 my-2 " `} onClick={removeEmoji} >Remove Emoji</button>
                <button className={`btn btn-outline-info mx-2 my-2 " `} onClick={removeNumber} >Remove Numbers</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={removeextralines} >Remove Empty Lines</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={encode} >Encode To Base64</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={decode} >Decode To Base64</button>
                <button className={`btn btn-outline-success mx-2 my-2`} onClick={text.length > 0 ? removeDuplicateWords : null} >Remove Duplicate Words</button>
                <button className={`btn btn-outline-info mx-2 my-2 " `} onClick={text.length > 0 ? removelines : null} >Remove All Lines</button>
                <button className={`btn btn-outline-primary mx-2 my-2`} onClick={text.length > 0 ? removepunctuation : null} >Remove Punctuation</button>
                <button className={`btn btn-outline-success mx-2 my-2`} onClick={text.length > 0 ? removeaccent : null} >Remove Accents</button>
                <button className={`btn btn-outline-success  mx-2 my-2`} onClick={text.length > 0 ? hd : null} >Copy Text</button>
                <button className={`btn btn-outline-info  mx-2 my-2 "`} onClick={text.length > 0 ? download : null} >Download Text</button>
                <button className={`btn btn-outline-secondary mx-2 my-2`} onClick={text.length > 0 ? cl : null} >Clear The Text </button>
            </div >
            <div className="container">
                <hr />
                <h2 style={TextStyle}>Your Text Summary</h2>
                <hr />
                <p className='active' style={TextStyle}>
                    The Text Contains <span>{text.length > 0 ? text.split(/\r\n|\r|\n/).length : text.split(/\r\n|\r|\n/).length = 0} Lines,</span><span className='fw-bold '> {text.split(/\s+/).filter((word) => {
                        return word.length !== 0
                    }).length} Words</span> , <span className="fw-bold">{text.length > 0 ? handleCount() : text.split(/\r\n|\r|\n/).length = 0} Vowels ,</span> <span className='fw-bold '>{text.length} Characters </span> With Spaces And <span className='fw-bold '>{text.trim().length} Character</span> Without Spaces. </p>
                <p style={TextStyle}>You Can Read It In <b> {text.split(/[ ]+/).filter((word) => {
                    return word.length !== 0
                }).length * 0.008} Minuts</b></p>
                <hr />
                {/* <h2 className='active'>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something In The Text Box To Preview It Here"}</p> */}
            </div>
        </>
    )
}