import React, { useState } from "react";
import classes from "./Adduser.module.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const initialState = {
    "User-name": "Soori",
    Age: "25",
  };
  const [userInput, setUserInput] = useState(initialState);
  const [error,setError]=useState();
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput["User-name"].trim().length === 0 ||
      userInput["Age"].trim().length === 0
    ) {
      setError({
        title:'Invalid input',
        msg:'Please enter a Valid name and age'
      })
      return;
    }
    
    props.onSaveData(userInput);
  };

  const ChangerHandler = (input, value) => {
    setUserInput((prevUser) => {
      return {
        ...prevUser,
        [input]: value,
      };
    });
  };

  const errorhandler=()=>
  {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorhandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <div className="input">
              <label>UserName</label>
              <input
                type="text"
                id="User-name"
                value={userInput["User-name"]}
                onChange={(event) => {
                  ChangerHandler("User-name", event.target.value);
                }}
              ></input>
            </div>
            <div className="input">
              <label>Age</label>
              <input
                type="number"
                min="0"
                max="100"
                id="Age"
                value={userInput["Age"]}
                onChange={(event) => {
                  ChangerHandler("Age", event.target.value);
                }}
              ></input>
            </div>
            <div>
              <Button type="submit">Add user</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
