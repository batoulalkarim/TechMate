import React, { useEffect, useState } from 'react';
import LoginToggle from './components/LoginToggle';
import NavBar from './components/NavBar';
import EditAccount from './components/EditAccount';
import Home from './components/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from './components/CreateAccount';


function App() {
  const [user, setUser] = useState(null)

 
  useEffect(() => {
    fetch('/me').then((res) => {
      if(res.ok){
        res.json().then((user) => setUser(user))
      } 
    });
  }, []);

  if(!user) return <BrowserRouter><LoginToggle setUser={setUser} /></BrowserRouter>

  return (
    <>
   
    <BrowserRouter>
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/createaccount" element={<CreateAccount user={user}/>} /> 
        <Route path="/editaccount" element={<EditAccount />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
