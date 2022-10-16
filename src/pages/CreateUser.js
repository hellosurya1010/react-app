import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  let navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    website: "",
  }

  const [user, setUser] = useState(initialValues);

  const handelSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1000/users", user);
    navigate('/');
  }

  const handelOnchange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }



    return (
      <div className="container">
        <div className="py-4">
          <h1>CreateUser Page</h1>
        </div>
        <div>
          <form action="" onSubmit={e => handelSubmit(e)}>
            <div className="row justify-center">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control" name="name" value={user.name}  onChange={handelOnchange} id="" aria-describedby="emailHelpId" placeholder="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-control" name="email" value={user.email} onChange={handelOnchange} id="" aria-describedby="emailHelpId" placeholder="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="">Phone</label>
                  <input type="email" className="form-control" name="phone" value={user.phone} onChange={handelOnchange} id="" aria-describedby="emailHelpId" placeholder="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="">Website</label>
                  <input type="email" className="form-control" name="website" value={user.website} onChange={handelOnchange} id="" aria-describedby="emailHelpId" placeholder="" />
                </div>
              </div>
            </div>
            <button className="btn btn-primary mt-2">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateUser;
  