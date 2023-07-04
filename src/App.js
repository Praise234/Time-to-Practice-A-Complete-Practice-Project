import { useState } from "react";
import Frame from "./Components/UI/Frame";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevProps) => {
      return [newUser, ...prevProps];
    });
    
  }
  const deleteUserHandler = (id) => {
    setUsers((prevProps) => {
      return prevProps.filter((item) => (item.id !== id));
    });
  }
  return (
    <Frame onDelete= {deleteUserHandler} addUser = {addUserHandler} allUsers = {users}/>
  );
}

export default App;
