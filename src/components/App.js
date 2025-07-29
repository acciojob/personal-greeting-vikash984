
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState('')
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Enter your name:</p>
    <input 
    type="text" value={name} onChange={(e)=> setNmae(e.target.name)}/>
  {name? <p>Hello {name}!<p> :null}
    </div>
  )
}

export default App
