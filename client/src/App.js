import React, { useEffect, useState } from 'react';
import LoginToggle from './components/LoginToggle';
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons';
import Messages from './components/Messages';
import MessagesScreen from './components/MessagesScreen';
import PersonalHeader from './components/PersonalHeader';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import CreateAccount from './components/CreateAccount';
import RequestedMatches from './components/RequestedMatches';
import PendingRequests from './components/PendingRequests';
import AcceptedMatches from './components/AcceptedMatches';
import RequestsToMe from './components/RequestsToMe';



function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([])
 
  useEffect(() => {
    fetch('/me').then((res) => {
      if(res.ok){
        res.json().then((user) => setUser(user))
      } 
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/matches/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMatches(data)
    })
  }, [])


  function onSwipe(direction, selectedUser){
    if(direction === 'right') {
      handleRight(user, selectedUser)
    } else if (direction === 'left') {
      handleLeft()
    }
  }

  function handleRight(user, selectedUser){
    console.log(user, selectedUser)
    const match = {
      requestor_id: user.id,
      receiver_id: selectedUser.id,
      status: "pending"
    }
    const url = '/matches'
    const settings = {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(match)
    }
    fetch(url, settings)
    .then((res) => {
      console.log(res)
    })
    .catch(console.error)
  }


  function handleLeft(){
    console.log("left")
  }




  if(!user) return <BrowserRouter><LoginToggle setUser={setUser} /></BrowserRouter>

  return (
    <>
   
    <BrowserRouter>
      <Routes>
      <Route path="/acceptedmatches" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><AcceptedMatches /></>} />
      <Route path="/requestsreceived" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><RequestsToMe /></>} />
        <Route path="/pendingrequests" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><PendingRequests /></>} />
        <Route path="/createaccount" element={<><PersonalHeader setUser={setUser} /><CreateAccount /></>} />
        <Route path="/chat/:user" element={<><Header backButton="/chat"/><MessagesScreen /></>} />
        <Route exact path="/chat" element={<><Header backButton="/" /><Messages /></>} />
        <Route path="/myrequests" element={<><PersonalHeader /><RequestedMatches /></>} />
        <Route exact path="/" element={<><Header /><TinderCards currentUser={user} onSwipe={onSwipe} /><SwipeButtons users={users} setUsers={setUsers}/></> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
