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
      if(res.ok) {
        res.json().then((user) => setUser(user))
      }
    }).catch(console.error);
  }, []);

  if(!user) return <LoginToggle setUser={setUser} />

  return (
    <>
   
    <BrowserRouter>
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/createaccount">
          <CreateAccount />
        </Route>  
        <Route path="/editaccount">
          <EditAccount />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
