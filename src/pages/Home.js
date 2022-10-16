import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:1000/users');
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
        <div className="flex-container">
            <h1>Home Page</h1> 
            <Link className="btn btn-primary" to="user/create">Add</Link>
        </div>
        <table className="table table-striped border shadow table-inverse table-responsive">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button className="btn btn-success">View</button>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
