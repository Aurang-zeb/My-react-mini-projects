import React, { useState } from 'react'
function Bmi() {
    const [Weight,setweight]=useState('');
    const [Height,setHeight]=useState('');
    const [bmi,setbmi]=useState(null);
    const CalculateBmi=()=>{

        const weightinkg=parseFloat(Weight);
        const HeightinMeter=parseFloat(Height)/100;
        const BmiValue=weightinkg/(HeightinMeter*HeightinMeter);
        setbmi(BmiValue.toFixed(2));
    }
  return (
    <div style={{margin:'100px', backgroundColor:'aqua'}}>
    <h2>BMI Calculator</h2>
    <label >Weight In Kg  </label>
      <input type="number" value={Weight} onChange={(e)=>setweight(e.target.value)} />
      <br/>
      <br />
      <label >Height In Cm  </label>
  <input type="number" value={Height} onChange={(e)=>setHeight(e.target.value)} />
  <br /><br />
  <button type="button" class="btn btn-lg btn-success" onClick={CalculateBmi} >Calculate</button>
   {bmi && <p>Your Bmi:{bmi}</p>}
    </div>
  )
}
export default Bmi
