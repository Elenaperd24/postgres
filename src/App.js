import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const addUser = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
    };
    const response = await axios.post("http://localhost:4000/newuser", data);

    console.log(response.data);
  };

  const showData = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
    };
    const response = await axios.post("http://localhost:4000/newuser", data);

    console.log(response.data);
  };

  const getDatabyId = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
    };
    const response = await axios.post("http://localhost:4000/newuser", data);

    console.log(response.data);
  };
  return (
    <>
      <div className="App">
        <form
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
          onSubmit={addUser}
        >
          <input type="name" placeholder="name" />
          <input type="email" placeholder="email" />
          <button type="submit">ADD USER</button>
        </form>
      </div>
      <br/>

{/* show data */}
      <div className="App">
        <form
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
          onSubmit={showData}
        >
          <button type="submit">SHOW DATA</button>
        </form>
      </div>
      <br/>
{/* show data by id */}
      <div className="App">
        <form
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
          onSubmit={getDatabyId}
        >
          <input type="number" placeholder="id" />
          <button type="submit">SHOW id User</button>
        </form>
      </div>
    </>
  );
}

export default App;
