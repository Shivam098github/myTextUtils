import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [words, setwords] = useState(0)
    const [letters, setletters] = useState(0)
    const [spaces, setspaces] = useState(0)
    // setText('No input');
    const handleUpClick=()=>{
        // console.log(text);
        props.settText("Converted to Upper Case")
        props.notify()
        let newText=text.toUpperCase();
        setText(newText);
        // props.showalert("converted to uppercase","danger")
        // props.notify
    }
    const handleLoClick=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText);
        // props.showalert("converted to lower case","warning")
    }
    let i,j;
    const handleOnChange=(event)=>{
        // console.log('ONchange was clicked');
        setText(event.target.value);
        console.log(text);
        if(text[text.length-1]===" " && text[text.length-2]!==" ")
        setwords(words+1)
        if(text[text.length-1]===" ")
        setspaces(spaces+1);
        setletters(text.length-spaces);
    }
    
    return (
        <>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.heading}</h2></label>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-warning mx-2" onClick={handleUpClick}>Clear Text</button>
                <button className="btn btn-warning mx-2" onClick={props.notify}>Copy Text</button>
                <button className="btn btn-warning mx-2" onClick={handleUpClick}>Remove extra spaces</button>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white',border:`2px solid ${props.mode==='light'?'black':'white'}`}}>
            <h1>Text Summary</h1>
            <p>{text.split(' ').length-text.split(' ').reduce((a, v) => (v === '' ? a + 1 : a), 0)} words and {text.length-(text.match(/ /g) || []).length} characters</p>
        </div>
        </>
    )
}
