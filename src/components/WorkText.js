import React, { useState } from "react";



export default function WorkText(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
  };
  const handlelowClick = () => {
    // console.log("uppercase was clicked"+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success")

  };
  const handleClearClick = () => {
    // console.log("uppercase was clicked"+text)
    let newText = ("");
    setText(newText);
    props.showAlert("Text cleared","success")

  };
  const handleCopy = () => {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value );
    props.showAlert("Text copied","success")

  };
  const handleExtraSpaces = () => {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Removed Extra Spaces","success")

  };

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  
  // text="enter text"; // wrong way to change the state
  // setText("enter your text here2") //correct way to change the state

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black '}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn -primary mx-2" onClick={handleUpClick} style={{color:props.mode==='dark'?'white':'black'}}>
          convert to upper case
        </button>
        <button className="btn btn -primary mx-2" onClick={handlelowClick} style={{color:props.mode==='dark'?'white':'black'}}>
          convert to lower case
        </button>
        <button className="btn btn -primary mx-2" onClick={handleClearClick} style={{color:props.mode==='dark'?'white':'black'}}>
          clear text
        </button>
        <button className="btn btn -primary mx-2" onClick={handleCopy} style={{color:props.mode==='dark'?'white':'black'}}>
          Copy Text
        </button>
        <button className="btn btn -primary mx-2" onClick={handleExtraSpaces} style={{color:props.mode==='dark'?'white':'black'}}>
          Remove Extra Spaces
        </button>
    
        
      
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>
        {text.trim().split(" ").length}  words and {text.replace(/\s+/g, '').length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0 ?text:"Enter Something in textbox to preview it here"}</p>
      </div>
    </>
  );
}
