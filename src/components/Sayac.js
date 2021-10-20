import React from 'react'
import { useState } from 'react'


export const Sayac = (props) => {
    

    const [sayac , setSayac] = useState(0)

    
    let Arttir = () =>{
        setSayac(sayac+1)
    }


    return (
        <div>
            {sayac}<br></br> 
            <button onClick={Arttir}>Arttir</button>
            <h1>{props.sg}-{props.fs} {props.fatihinselami('fatih')}</h1>
        </div>
    )
}

