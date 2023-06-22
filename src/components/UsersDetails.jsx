import Table from "react-bootstrap/Table";
import HigherOrderComponent from "./HigherOrderComponent";

const UsersDetails = ({ usersData }) => {
  return (
    <>
      <h1 className="text-center">All User Details</h1>
      <Table striped bordered hover size="sm" style={{ marginTop: "3rem" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
                <td>
                  City:{user.address && user.address.city}&nbsp; Street:
                  {user.address && user.address.street}
                </td>
                <td>
                  name:{user.company && user.company.name} &nbsp; Type:
                  {user.company && user.company.bs}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default HigherOrderComponent(UsersDetails);
