import React,{useState} from 'react';
import AddUser from './Components/Adduser';
import UsersList from './Components/UsersList';

function App() {

  const [Lists,setLists]=useState([]);

  const DataHandler=(userInput)=>{
    setLists(prevList=>{
      return [...prevList,{name:userInput['User-name'],age:userInput['Age'],id:Math.random().toString()}]
    });
  };

  

  return (
    <div>
      <AddUser onSaveData={DataHandler}/>
      <UsersList list={Lists}/>
    </div>
  );
}

export default App;
