import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((resp) => setData(resp));
  }, []);

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
  }

  return (
    <div>
      <h1>Get Api Call</h1>
      <table border="1">
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>
              <button type="button" onClick={() => deleteUser(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
