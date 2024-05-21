// import React from 'react'
// import { useState } from 'react'
// import './App.css'

// const App = () => {
  
//   const [item,setitem]=useState('');
//   const [list,setlist]=useState([]);
//   const [Edit,setEdit]=useState(null)
//   const [currentValue,setCurrentValue]=useState('')

//   const Addtodobtn=()=>{
//       setlist([...list,item]);
//       setitem('');
//   }
  
//   const Deltodobtn=()=>{
//     setlist([]);
//   }
  
//   const HandleEditbtn=(index)=>{
//     setEdit(index)
//     setCurrentValue(list[index])
//   }

//   const HandleSavebtn=(index)=>{
//     const newlist = [...list];
//     newlist[index]=currentValue;
//     setlist(newlist);
//     setEdit(null)
//   }

//   const HandleDeletbtn=(index)=>{
//     const newList = list.filter((_, i) => i !== index);
//     setlist(newList);
//   }
//   return (
//     <div>
      
//       <div>
//         <h1>TO DO LIST</h1>
//         <input onChange={(e)=>setitem(e.target.value)}
//           value={item}
//           type='text'
//           placeholder='ADD TODO' >
//             </input>
            
//         <button onClick={Addtodobtn} >ADD</button>
//         <button onClick={Deltodobtn}  >DEL / ALL</button>
            
//       </div>
      
//       {
//   list.map((element, index) => (
//     <div key={index}>
//       { Edit === index ? (
//       <>
//        <input onChange={(e)=>setCurrentValue(e.target.value)}
//           value={currentValue}
//           type='text'
//           placeholder='EDIT TODO' >
//             </input>
//             <button onClick={()=>HandleSavebtn(index)}>Save</button>
//             </>
            
//             ): (
//             <><li>{element}</li>
//       <button onClick={()=>HandleEditbtn(index)} >Edit</button>
//       <button onClick={()=>HandleDeletbtn(index)}>Delete</button></> )}
//     </div>
//   ))
// }
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();
  const [currentValue, setCurrentValue] = useState('');

  const addTodoBtn = () => {
    setList([...list, item]);
    setItem('');
  };

  const delTodoBtn = () => {
    setList([]);
  };

  const handleEditBtn = (index) => {
    setEdit(index);
    setCurrentValue(list[index]);
  };

  const handleSaveBtn = (index) => {
    const newList = [...list];
    newList[index] = currentValue;
    setList(newList);
    setEdit();
  };

  const handleDeleteBtn = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <h1>TO DO LIST</h1>
        <input
          onChange={(e) => setItem(e.target.value)}
          value={item}
          type="text"
          placeholder="ADD TODO"
          className="todo-input"
        />
        <button onClick={addTodoBtn} className="add-btn">ADD</button>
        <button onClick={delTodoBtn} className="del-all-btn">DEL / ALL</button>
      </div>

      <ul className="todo-list">
        {list.map((element, index) => (
          <div key={index} className="todo-item">
            {edit === index ? (
              <>
                <input
                  onChange={(e) => setCurrentValue(e.target.value)}
                  value={currentValue}
                  type="text"
                  placeholder="EDIT TODO"
                  className="edit-input"
                />
                <button onClick={() => handleSaveBtn(index)} className="save-btn">Save</button>
              </>
            ) : (
              <>
                <li className="`todo-element`">{element}</li>
                <button onClick={() => handleEditBtn(index)} className="edit-btn">Edit</button>
                <button onClick={() => handleDeleteBtn(index)} className="delete-btn">Delete</button>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;

