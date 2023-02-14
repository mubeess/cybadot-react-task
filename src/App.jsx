import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [Users, setUsers] = useState([
    {
      name: "Mubarak Ibrahim",
      age: 28,
      job: "Frontend developer",
      country: "Nigeria",
      hobby: "Footbal",
    },
    {
      name: "Damilola Oguniyi",
      age: 25,
      job: "Backend developer",
      country: "Nigeria",
      hobby: "Music",
    },
    {
      name: "Emmanuel Prince",
      age: 23,
      job: "Backend developer",
      country: "Nigeria",
      hobby: "Traveling",
    },
    {
      name: "Musa Isa",
      age: 26,
      job: "Frontend developer",
      country: "Nigeria",
      hobby: "Dancing",
    },
    {
      name: "Isaac Ajayi",
      age: 22,
      job: "Devops engineer",
      country: "Cameroon",
      hobby: "Footbal",
    },
  ]);

  function deleteUser(index) {
    const confirmed = confirm("Are You Sure You Want To Delete The User?");
    if (!confirmed)  return;
    
    const filteredUser = Users.filter((user, ind) => ind !== index);
    setUsers(filteredUser);
  }
  return (
    <div className="App">
      {Users.map(({ name, age, hobby, job, country }, ind) => (
        <UserCard
          deleteUser={deleteUser}
          name={name}
          age={age}
          hobby={hobby}
          job={job}
          country={country}
          index={ind}
          key={ind.toString()}
        />
      ))}
    </div>
  );
}

export default App;
