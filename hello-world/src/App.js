
import { useState } from 'react';
import ToDoList from './ToDoList';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from './HelloWorld';

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
        <Route path="/Hello" element={<HelloWorld />}/>
      </Routes>
      </BrowserRouter>
   
      </div>
  );
}

export default App;
