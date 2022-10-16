import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Routes, Route, useRoutes} from 'react-router-dom';
import Error404 from './pages/Errors';
import CreateUser from './pages/CreateUser';


const Links = () =>{
  return useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/user/create',
      element: <CreateUser/>
    },
    {
      element: <Error404/>
    }
  ]);
}


function App() {
  return (
    <>
      <Routes>
        <Navbar/>
        <Links/>
      </Routes>
    </>
  );
}

export default App;
