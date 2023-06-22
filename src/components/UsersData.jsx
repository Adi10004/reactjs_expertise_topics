import Table from "react-bootstrap/Table";
import HigherOrderComponent from "./HigherOrderComponent";
const UsersData = ({ usersData }) => {
  return (
    <>
      <h1 className="text-center">User</h1>
      <Table striped bordered hover size="sm" style={{ marginTop: "3rem" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default HigherOrderComponent(UsersData);
