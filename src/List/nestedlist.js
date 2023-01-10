import React from "react";
import { Table } from "react-bootstrap";

function Nested() {
  // 5 Objects of users array and 4 nested objects of address
  //It's like a JSON API data
  const users = [
    {
      name: "Rishav",id: "100", address: 
      [
        { Hn: "10", city: "Noida", state: "UP" },
        { Hn: "14", city: "Ranchi", state: "Jharkhand" },
        { Hn: "19", city: "Surat", state: "Gujarat" },
        { Hn: "30", city: "Chennai", state: "TamilNadu" },
      ]
    },
    {
      name: "Alok",id: "101",address: 
      [
        { Hn: "190", city: "Prayagraj", state: "UP" },
        { Hn: "104", city: "Deoghar", state: "Jharkhand" },
        { Hn: "159", city: "Rajkot", state: "Gujarat" },
        { Hn: "230", city: "Hyderabad", state: "AndraPradesh" },
      ]
    },
    {
      name: "Aditya",id: "102",address:
      [
        { Hn: "1394", city: "Ranchi", state: "Jharkhand" },
        { Hn: "9000", city: "Noida", state: "UP" },
        { Hn: "1679", city: "Giridih", state: "Jharkhand" },
        { Hn: "5930", city: "Kochi", state: "Kelera" },
      ]
    },
    {
      name: "Shivam",id: "103",address: 
      [
        { Hn: "180", city: "Noida", state: "UP" },
        { Hn: "1344", city: "Ludhiana", state: "Punjab" },
        { Hn: "1099", city: "Vahnagar", state: "Gujarat" },
        { Hn: "30", city: "Banglore", state: "Karnataka" },
      ]
    },
    {
      name: "Priyam",id: "104",address: 
      [
        { Hn: "180", city: "Madurai", state: "TamilNadu" },
        { Hn: "13834", city: "Ranchi", state: "Jharkhand" },
        { Hn: "16379", city: "Coimbatore", state: "TamilNadu" },
        { Hn: "390", city: "Kollam", state: "Kerala" },
      ]
    },
  ];

  return (
    <div>
      <h3>Nested List with Multidimension Array</h3>
      <Table striped >
        <tbody>
            <tr>
                <th>S.N</th> 
                <th>Name</th>
                <th>ID</th>
                <th>Address</th>
            </tr>
        </tbody>
        {
            users.map((data,i)=>
             <tr key={i}>
             {/* To add Serial number without taking data in objects and insert S.N with use of unique key */}
                <td>{i+1}</td>
                <td>{data.name}</td>
                <td>{data.id}</td>
                <td>
                <Table striped variant="dark">
                <tbody>
                <tr>
                  <th>House No.</th>
                  <th>City</th>
                  <th>State</th>
                </tr>
                </tbody>
                 {data.address.map((item,i)=>
                     <tr key={i}>
                        <td>{item.Hn}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                     </tr>
                    )
                }
                </Table>
                </td>
             </tr>
            )
        }
      </Table>
    </div>
  );
}

export default Nested;
