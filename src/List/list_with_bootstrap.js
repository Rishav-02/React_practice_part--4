import React from "react";

import "./arraylist.css";
import {Table} from 'react-bootstrap';

function List() {
  //These data may be outside the function List.
  const users = [
    { name: "Rishav", id: "100", contact: 8909872890 },
    { name: "Alok", id: "101", contact: 6208978120 },
    { name: "Aditya", id: "102", contact: 7899930101 },
    { name: "Shivam", id: "103", contact: 9909342890 },
    { name: "Priyam", id: "104", contact: 9160476659 },
  ];

  return (
    <div className="list">
      <h3>List with Bootstrap Table</h3>
      {/* From react-bootstrap */}
      <Table striped variant="dark">
      <tbody>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Contact</th>
        </tr>
        {/* Each child in a list should have a unique "key" prop. */}
        {/* "unique key" is as an id's which is used to identify Virtual DOM easily and also used to update only necessary items. */}
        {
          users.map((item,i) => 
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.contact}</td>
          </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default List;
