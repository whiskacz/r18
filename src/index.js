import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function R18App () {

    const reference = useRef(null)

    useEffect(() => {
        reference.current.focus()
    })

    return (
        <div style={{
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
                ref={reference}/>
            <button style={{
                margin:'50px',
                width:'100px',
                height:'50px',
                border:'none',
                backgroundColor:'green',
                borderRadius:'10px',
                color:'white',
                cursor:'pointer',
            }}>Click me</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R18App />)
