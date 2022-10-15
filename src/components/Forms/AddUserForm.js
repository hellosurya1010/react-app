import { useState } from "react";

const AddUserForm = (props) => {
  const { addUser } = props;

  const initialFormState = {name: "", email: ""};
  const [user, setUser] = useState(initialFormState);

  const handelInputChange = (event) => {
      const {name , value} = event.target;
      setUser({...user, [name]:value});
  };

  return (
    <form action="" onSubmit={event => {event.preventDefault(); addUser(user); setUser(initialFormState)}}>
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="form-group m-2">
            <label>Name</label>
            <input type="text" onChange={handelInputChange} className="form-control" value={user.name} name="name" />
            <div className="form-group m-2">
              <label>Email</label>
              <input type="email" onChange={handelInputChange} className="form-control" value={user.email} name="email" />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-success" type="submit">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
