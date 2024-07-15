import React,{useState} from 'react'

export default function Counter(props) {
    const[state,setstate]=useState(0);


    const handleOnChange=(event)=>{
        setstate(event.target.value)
console.log("this is on change function");
    }

    const handleInc=()=>{
        
        let newsat=(state+1);
        setstate(newsat);}
        
    
    const handleDec=()=>{
        let newsat=(state-1);
        setstate(newsat);
        
    }
    const handleReset=()=>{
        let newsat=(0)
        setstate(newsat);
        
    }
   

  return (
    <>

    <div className='container' value={state} onChange={handleOnChange}>
        <h1>{props.title}</h1>
    <button type="button" className="btn btn-primary mx-2" onClick={handleInc}>Increment: {state}</button>
    <button type="button" className="btn btn-primary  mx-2" onClick={handleDec}>Decrement</button>
    <button type="button" className="btn btn-primary  mx-2" onClick={handleReset}>Reset</button>
    <h2 >Counter preview</h2>
    <p>{state}</p>
    

    </div>
    </>
  )
}
