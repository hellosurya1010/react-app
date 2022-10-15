import { Component } from "react";

const TableHead = () => {
  return (
<thead className="thead-inverse">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};




const TableBody = (props) => {
    let {users, deleteTr} = props; 
    console.log({props})
    const rows = users.map((user, index) => {
        return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button className="btn btn-danger" onClick={() => deleteTr(index)}>Delete</button></td>
            </tr>
        );
    });

  return (
    <tbody>
      {rows}
    </tbody>
  );
};
     

class Table extends Component {
  render() {
    const {users, deleteTr} = this.props;
    return (<table className="table table-striped table-inverse table-responsive">
        <TableHead/>
        <TableBody deleteTr={deleteTr}  users={users}/>
    </table>);
  }
}

export default Table;
