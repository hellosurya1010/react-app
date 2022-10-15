import { useState } from 'react';
import AddUserForm from './components/Forms/AddUserForm';
import UserTable from './components/Tables/Users';

function App() {
   const usersData = [
    {
      name: "Surya",
      email: "Surya@gmail.com"
    },
    {
      name: "Mani",
      email: "Mani@gmail.com"
    },
    {
      name: "Sesha",
      email: "Sesha@gmail.com"
    },
  ];

const deleteUser = (index) => {
  users = users.filter((value, i) => index !== i );
  console.log(users);
  setUser(users);
}
const updateUser = (index) => {

}
  
  let [users, setUser] = useState(usersData);
  
  const addUser = (user) => {
    setUser([...users, user]);
  }

  return (
    <>
    <AddUserForm addUser={addUser}/>
    <UserTable updateUser={updateUser} deleteUser={deleteUser}  users={users}/>
    </>
  );
}

export default App;
