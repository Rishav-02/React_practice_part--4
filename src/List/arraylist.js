import React from "react";

import "./arraylist.css";

//Different types of data
const details = [
  { name: "Rishav", email: "rishav567@gmail.com", contact: 8909872890 },
  { name: "Alok", email: "alok234@gmail.com", contact: 6208978120 },
  { name: "Aditya", email: "aditya900@gmail.com", contact: 7899930101 },
  { name: "Shivam", email: "shivam780@gmail.com", contact: 9909342890 },
  { name: "Priyam", email: "priyam123@gmail.com", contact: 9160476659 },
];

function Array() {
  const students = ["Rishav", "Alok", "Aditya", "Shivam"]; //same type of items

  //Inside return we can only use map,filter,etc methods we will not use loops(for,while,dowhile) inside return statement.
  return (
    <div className="list">
      <h3>Handle Array with List</h3>
      {/* parameter i and key={i} remove warning from console */}
      {students.map((data,i) => (
        <p key={i}>Name is : {data}</p>
      ))}
      <br />

      <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
        {
          details.map((data,j) => (
          <tr key={j}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Array;
