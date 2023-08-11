import React, {useState} from 'react'

export default function TextForm(props) {
    const upClick =()=>{
        // console.log("Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const loClick =()=>{
        // console.log("Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const trimClick =()=>{
        // console.log("Clicked");
        let newText=(text.trim());
        setText(newText);
        props.showAlert("Text Trimmed", "success");
    }
    const clearClick =()=>{
        // console.log("Clicked");
        let newText=('');
        setText(newText);
        props.showAlert("Cleared Text", "success");
    }
    const handleonChange =(event)=>{
        // console.log("Changed")
        setText(event.target.value)
    }
    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const [text, setText]=useState('');
    return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1"  onClick={upClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={loClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={trimClick}>Trim</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={clearClick}>Clear</button>
        </div>
     <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length}Words And {text.length}Character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox to preview here"}</p>
     </div>
        </>  
        )
}
