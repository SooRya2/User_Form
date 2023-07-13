import React from "react";
import Card from './Card';


const UserList = (props) => {
  
  return (
    <Card>
      <div>User's List</div>
      <ul>
        {props.list.map((user)=>(
            <li key={user.id}>
                {user.name}({user.age} years old)
            </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
