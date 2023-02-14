import React from "react";
import "./styles/usercard.css";
function UserCard({ name, job, age, country, hobby,index,deleteUser }) {
  return (
    <div onClick={()=>{
       deleteUser(index) 
    }} className="user-container">
      <h2>Name:{name}</h2>
      <span>Job:{job}</span>
      <span>Age:{age}</span>
      <span>Country:{country}</span>
      <span>Hobby:{hobby}</span>
      <div className="delete">
          <span>Delete</span>
      </div>
    </div>
  );
}

export default UserCard;
