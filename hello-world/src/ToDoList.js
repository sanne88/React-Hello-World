
import { useState } from 'react';

function ToDoList() {
const[todoItem, setToDoItem]= useState(null);
const[error, setError]= useState(null);
const[todoList, setToDoList]= useState([]);
const handleChange=(e)=>{

    setToDoItem(e.target.value);
}
const handleClick= (e)=>{

    
    todoList.push(todoItem);
    setToDoItem(null);
    setToDoList(todoList);


};

  return (
    <div className="App">
    
    <label> TO DO LIST</label>

   
    {
    todoList.map((index)=>( index))
    }
      
  <br/>
    <label> Input To do Item </label>
    <input type="text" onChange={handleChange} name="addtodo"  />
    <button onClick={handleClick}> Add Item</button>
    </div>
  );
}

export default ToDoList;
