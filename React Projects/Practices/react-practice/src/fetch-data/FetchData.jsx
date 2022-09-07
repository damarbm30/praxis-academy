import React, { useState } from "react";
import Axios from "axios";

const FetchData = () => {
  const [user, setUser] = useState("");

  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data[4].id + " : " + response.data[4].name);
    });
  };

  return (
    <div>
      <button onClick={getData}>Click me to get data</button>
      {user}
    </div>
  );
};

export default FetchData;
