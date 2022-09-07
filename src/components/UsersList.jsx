import React, { useState } from "react";
import "../assets/usersList.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const UsersList = () => {
  const [data,setData] = useState([
    {
      id: 1,
      first_name: "Donovan",
      last_name: "Candlin",
      email: "dcandlin0@hubpages.com",
      dob: "2021-09-30",
      pno: "613-580-8211",
      address:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    },
    {
      id: 2,
      first_name: "Ive",
      last_name: "Dymoke",
      email: "idymoke1@jigsy.com",
      dob: "2022-06-09",
      pno: "531-146-5015",
      address:
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
    {
      id: 3,
      first_name: "Kendre",
      last_name: "Mullinder",
      email: "kmullinder2@geocities.com",
      dob: "2021-12-22",
      pno: "618-643-0830",
      address:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
      id: 4,
      first_name: "Leisha",
      last_name: "Kynsey",
      email: "lkynsey3@vimeo.com",
      dob: "2022-01-16",
      pno: "227-354-4637",
      address:
        "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    },
    {
      id: 5,
      first_name: "Cherish",
      last_name: "Cadamy",
      email: "ccadamy4@va.gov",
      dob: "2022-04-12",
      pno: "288-451-3628",
      address:
        "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    },
  ])
  // handler for deleting user
  const deleteUser= (i)=>{
    let copy = data.filter((value, index) => {
      return index !== i;
    });
    setData(copy);
  }
  return (
    <>
      <div className="mainContainer">
        <div className="Header">
          <h1>
            <span className="narrowText">User</span> Management
          </h1>
          <div className="headerAdd_div">
            <AddCircleIcon />
            <p>Add New User</p>
          </div>
        </div>
        <div className="table_div">
          <table className="table table-light">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => {
                return (
                  <tr className="eachRow" key={index}>
                    <td>{value.id}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>{value.email}</td>
                    <td>{value.dob}</td>
                    <td>{value.pno}</td>
                    <td>{value.address}</td>
                    <td>
                      <DeleteForeverIcon className="delBtn" onClick={()=>{deleteUser(index)}}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
