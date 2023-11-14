import React, { useState } from "react";
import User from "./User";

/*export default function ListUser(props) {
  const [activeId, setActiveId] = useState(1);
  const users = props.utilisateurs;
  function handleChangeActiveId(id) {
    setActiveId(id);
  }
  return (
    <div className="App">
      <h1>nombre d'utilisateurs: {props.utilisateurs.length}</h1>
      {users.map((user) => {
        return (
          <User
            user={user}
            activeId={activeId}
            handleChangeActiveId={handleChangeActiveId}
          />
        );
      })}
    </div>
  );
}*/
export default function ListUser (props){
    const [activeId,setActiveId]=useState([]);
    const users = props.utilisateur;
    const handleChangeActiveId=()=>{
      setActiveId(users)
    }
    return (
      <div>
        <h2>Nombre d'utilisateurus</h2>
        {users.map((user) => (
          <div>
            <h6>name: {user.name}</h6>
            email : {user.email}
          </div>
        ))}
      </div>
    );
}
