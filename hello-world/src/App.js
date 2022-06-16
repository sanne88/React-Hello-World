
import { useState } from 'react';
import ToDoList from './ToDoList';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
// const[userName, setUserName]= useState(null);
// const[error, setError]= useState(null);
// const handleChange = (e)=>{
//   const validate= new RegExp("^[a-zA-Z]+$");
//   let name= e.target.value;
//  //clear the error 
//   setError(null);
//   //if entered input is empty set the username to empty
// if(name=="") setUserName("");
// //if name not empty then valdiate it with the regular expression
//   if(name!="")
//   {
//     if(name.match(validate))
//     {
//     setUserName(e.target.value);
//     }
//     else
//     {
//     setError('Enter Valid UserName');
//     }
//   }
// };

  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />}/>
     
      </Routes>
      </BrowserRouter>
   
      </div>
  );
}

export default App;
