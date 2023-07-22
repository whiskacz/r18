import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from 'react-animated-text-content';
import ReactDOM from 'react-dom/client';

function R18App () {

   const [animatedText,setAnimatedText] = useState("")

    const reference = useRef(null)
    
    const [values, setValues] = useState("")
    
    const handleChange = (e) => {
        setValues(e.target.value)
    }
 
    useEffect(() => {
        reference.current.focus()
    })
    
    const handleClick = () => {
        setAnimatedText(values)
    }

    return (
        <form 
            onSubmit={(e)=>e.preventDefault()}
            style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            width:'50vw',
            height:'50vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            backgroundColor:"lightblue",
            borderRadius:'10px'
        }}>
            <input type="text" style={{
                border: 'none',
                borderBottom:'2px solid black'
            }}  placeholder='enter text to convert'
                ref={reference}
                value={values}
                onChange={handleChange}
                />
            <button 
                onClick={handleClick}
                style={{
                margin:'50px',
                width:'100px',
                height:'50px',
                border:'none',
                backgroundColor:'green',
                borderRadius:'10px',
                color:'white',
                cursor:'pointer',
            }}>Click me</button>
            <AnimatedText
            type="words"
            animation={{
                x:'200px',
            }}
            >
                {animatedText}
            </AnimatedText>

        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R18App />)
