
import { useState } from 'react';

function App() {
const[userName, setUserName]= useState(null);

const handleChange = (e)=>{
  
  setUserName(e.target.value);

};

  return (
    <div className="App">
      <h4> Sample Hello World Application. Input userName to Print the UserName</h4>
     <p> Hello World {userName} !!</p>
     <label> Enter UserName : </label>
     <input type="text" name="txtUserName" onChange={handleChange}></input>
    </div>
  );
}

export default App;
