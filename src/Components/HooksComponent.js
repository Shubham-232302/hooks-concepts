import React,{useState, useEffect} from 'react'
import DisplayComponents from './DispalyComponents'


const url ="http://3.17.216.66:4000/restaurant?stateId=1"

function HooksComponent(){
    const [title] = useState('Hooks App') 
    const [count, setCOunt] = useState(78)
    const [restaurants, setRestaurants] = useState()
    console.log(restaurants)

    function updateCount(){
        setCOunt(count+1)
    }

    useEffect(() =>{
        console.log("inside use effect")
        fetch(url, {method:"GET"})
        .then((res) => res.json())
        .then((data) =>{
            setRestaurants(data)
        })
    },[count])
    return(
        <><h1>{title}</h1>
        <h1>{count}</h1>

        <button onClick={updateCount}>Click me</button>
        <DisplayComponents restData = {restaurants}/>

        </>
    )
}


export default HooksComponent