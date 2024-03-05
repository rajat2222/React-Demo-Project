import React,{useState} from 'react'
import './cssCustom/headerbckgnd.css';


export default function FormText(props) {

    const [text, setText] = useState("");

    //const [count, setCount] = useState(0); 
    //Hooks defination : without making class we can use hooks as a class
    //we cannot update state as a normal variable
    //text ="new text" -> wrong way to change state
    // setText = ("new text")  -> correct way to change state

    const handleUpClick = () => {   
        // Arrow function () =>
        //console.log("Upper case was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Hi","success");
    }

    const handlelowClick = () => {   
        // Arrow function =>
        //console.log("Upper case was clicked " + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("bye","success");
    }

    const handleAlternateClick = () => {   
        // Arrow function =>
        
        let newText = "";
        
        for (var i=0; i<text.length; i++) {
            var ch = String.fromCharCode(text.charCodeAt(i));
            if (i % 2 === 1) {
                ch = ch.toUpperCase();
            } else {
                ch = ch.toLowerCase();
            }
            newText =  newText.concat(ch);
        }
        setText(newText);
    }

    const handleClearClick = () => {   
        // Arrow function =>
        //console.log("Upper case was clicked " + text);
        let newText= '';
        setText(newText);
    }

    const handleSentencedClick = () => {   
        // Arrow function =>
        //console.log("Upper case was clicked " + text);
        let newText= text.toLowerCase().charAt(0).toUpperCase() + text.slice(1) +".";
        setText(newText);
    }

    const handleOnChange = (event) => {   // Arrow function =>
        //console.log("Onchange");
        setText(event.target.value);
    }
            

  return (
    <>
    <div className='container'>
     <h1 className="h3" style={{color: props.mode === 'dark'?'white':'black'}}>{props.mycustomheading}</h1>
     <div className='mb-3'>
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black' }} value={text} onChange={handleOnChange} id='myBox' rows="10"></textarea>
     </div>
     <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
     &nbsp;
     <button className="btn btn-primary" onClick={handlelowClick}>Convert to Lower Case</button>
     &nbsp;
     <button className="btn btn-primary" onClick={handleAlternateClick}>AlTeRnAtE TeXt</button>
     &nbsp;
     <button className="btn btn-primary" onClick={handleSentencedClick}>Sentenced Text</button>
     &nbsp;
     <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
    </div>
    
    <div className='container my-3'>
        <h2 style={{color: props.mode === 'dark'?'white':'black'}}>Your Text Summary</h2>
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.split(" ").length} words, {text.length} characters</p>
        {/* text.split will give an array and then .length will count the words*/}
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{0.008 * text.split(" ").length} minutes to read</p>
        <h2 style={{color: props.mode === 'dark'?'white':'black'}}>Preview</h2>
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.length>0?text:"Enter something to preview it here!"}</p>
    </div>
    </>
  )
}

