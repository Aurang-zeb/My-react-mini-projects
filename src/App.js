import { useState } from "react";


function App() {
   
const [color,setcolor]=useState('#000000')
 const colorchange=(e)=>{
  setcolor(e.target.value)
 }

  return (
      <>
      <h1>Color Picker</h1>
      <input type="color" value={color} onChange={colorchange} />
      <div style={{width:'100px',height:'300px'}}>
      </div>
      <p>Selected Color {color} </p>
      </>
  );
}

export default App;
