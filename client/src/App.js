import React, { useEffect, useState } from 'react';
import LoginToggle from './components/LoginToggle';
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons';
import Messages from './components/Messages';
import MessagesScreen from './components/MessagesScreen';
// import NavBar from './components/NavBar';
// import EditAccount from './components/EditAccount';
// import Home from './components/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
// import CreateAccount from './components/CreateAccount';


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
      {/* <NavBar setUser={setUser} user={user} /> */}
      <Routes>
        <Route path="/chat/:user" element={<><Header backButton="/chat"/><MessagesScreen /></>} />
        <Route exact path="/chat" element={<><Header backButton="/" /><Messages /></>} />
        <Route exact path="/" element={<><Header /><TinderCards /><SwipeButtons /></> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
