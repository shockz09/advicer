import React,{useState, useEffect} from 'react';
import axios from "axios";
import './index.css'

const App = ({slip})=>{
  const [advice, setAdvice] = useState("")
  useEffect(() => {
   
    axios.get("	https://api.adviceslip.com/advice").then((response) => {
     setAdvice(response.data.slip.advice);
    });
  }, []);

  const handleonClick = ()=>{
    
      axios.get("	https://api.adviceslip.com/advice").then((response) => {
       setAdvice(response.data.slip.advice);
      });

  
    return (
      <div>
        <h1>Hello!   👋</h1>
     <h2>  {advice}</h2>
     <button onClick={handleonClick} />
      </div>
    )
  }
  
  return (
    
    <div>
      <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Advicer
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="https://github.com/shockz09" target="_blank">Github</a>
    <a href="https://stackoverflow.com/users/16145261/rohit-mishra" target="_blank">Stackoverflow</a>
    <a href="https://www.linkedin.com/in/rohit-mishra-41057b229/" target="_blank">LinkedIn</a>
    
    
  </div>
</div>
<br/>
      <h1>Hello!   👋</h1>
      <br/>
   <h2>  {advice}</h2>
   <br/>
  
   <button className = "button-new"onClick={handleonClick} >New Advice</button>
    </div>
  )
}

export default App;