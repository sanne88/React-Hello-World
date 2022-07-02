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
    
    <label> Input To do Item </label>
    <input type="text" onChange={handleChange} name="addtodo"  />
    <button onClick={handleClick} name="submit"> Add Item</button>
<br/>
    <span style={{"font-weight":"bold"}}> TO DO LIST</span>
<section style={{"display":"flex", "flex-direction":"column"}}>
<span style={{"font-weight":"bold"}}>Task Name</span>
    {      
    todoList.map((index)=>( 
     <div name='todolist'>
     
      <h4>{index}</h4>     
      </div>      
      ))
    }
    </section>
      
  <br/>
 
    </div>
  );
}

export default ToDoList;
