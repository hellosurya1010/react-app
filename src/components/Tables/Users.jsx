const UserTable = (props) => {
  let { users, deleteUser, updateUser } = props;
  console.log( deleteUser, updateUser);
  const trEl = users.map((user, i) => {
    return (
      <tr key={i}>
        <td>{i+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={ () => updateUser(i)} className="btn btn-primary">Edit</button>
          <button onClick={ () => deleteUser(i)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }) ||
   (
    <tr>
      <td colSpan={4}>No Users</td>
    </tr>
  );

  return(<table className="table table-striped table-inverse table-responsive">
    <thead className="thead-inverse">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>{trEl}</tbody>
  </table>);
};

export default UserTable;
