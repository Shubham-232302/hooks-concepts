import React,{useState} from 'react'

function HooksComponent(){
    const [title] = useState('Hooks App') 
    const [count, setCOunt] = useState(78)
    function updateCount(){
        setCOunt(count+1)
    }
    return(
        <><h1>{title}</h1>
        <h1>{count}</h1>

        <button onClick={updateCount}>Click me</button>


        </>
    )
}


export default HooksComponent