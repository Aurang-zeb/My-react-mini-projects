import React from 'react'
import { useState } from "react";
import './Bulb.css'

function Bulb() {

 const [on,setoff]=useState(false)
const turnon=()=>
    {
  setoff(!on);
   }
  return (
    <>
    <div className={`container ${on ? 'on':'off'}`} >
    <h2>Light Bulb</h2>
     <input type="checkbox" checked={on} onChange={turnon}  /> 
     <h1>{on ? 'on':'off'}</h1>
     </div>
    </>
  )
}

export default Bulb
