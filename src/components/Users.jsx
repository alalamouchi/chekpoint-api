import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";
function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="users-container">
      {users &&
        users.map((user) => {
          return (
            <UserItem
              
              {...user}
            />
          );
        })}
    </div>
  );
}

export default Users;
