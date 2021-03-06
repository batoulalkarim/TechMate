import React, { useEffect, useState, useMemo, useRef } from 'react';
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
import ViewProfile from './components/ViewProfile';
import MyAccount from './components/MyAccount';


function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([])
  const [approvedMatch, setApprovedMatch] = useState([])
  const [currentIndex, setCurrentIndex] = useState(users.length - 1)
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch('/me').then((res) => {
      if(res.ok){
        res.json().then((user) => setUser(user))
      } 
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUsers(data)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/matches`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMatches(data)
    })
  }, [])

  

  function onSwipe(direction, selectedUser){
    if(direction === 'right') {
      createMatch(user, selectedUser, "declined", false)
    } else if (direction === 'left') {
      // createMatch(user, selectedUser, "pending", false)
      console.log('you swiped left')
    }
  }
  

  function createMatch(user, selectedUser, likes) {
    const match = {
      requestor_id: user.id,
      receiver_id: selectedUser.id,
      status: "pending",
      likes: likes,
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
  


 

  if(!user) return <BrowserRouter><LoginToggle setUser={setUser} /></BrowserRouter>

  return (
    <>
   
    <BrowserRouter>
      <Routes>
      <Route path="/acceptedmatches" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><AcceptedMatches currentUser={user} user={user} setSelectedPerson={setSelectedPerson}/></>} />
      <Route path="/requestsreceived" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><RequestsToMe currentUser={user}  setSelectedPerson={setSelectedPerson} /></>} />
        <Route path="/pendingrequests" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><PendingRequests currentUser={user} setSelectedPerson={setSelectedPerson}/></>} />
        <Route path="/createaccount" element={<><PersonalHeader setUser={setUser} /><CreateAccount setUser={setUser} currentUser={user}/></>} />
        <Route path="/messages/:id" element={<><Header backButton="/messages"/><MessagesScreen selectedPerson={selectedPerson} currentUser={user} setSelectedPerson={setSelectedPerson} /></>} />
        <Route exact path="/messages" element={<><Header backButton="/" /><Messages currentUser={user} setSelectedPerson={setSelectedPerson} selectedPerson={selectedPerson}/></>} />
        <Route path="/myrequests" element={<><PersonalHeader setUser={setUser}/><RequestedMatches /></>} />
        <Route path="/myaccount" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><MyAccount currentUser={user} /></>} />
        <Route path="/viewprofile/:id" element={<><Header backButton="/"/><ViewProfile selectedPerson={selectedPerson} currentUser={user} /></>} />
        <Route exact path="/" element={<><Header /><TinderCards currentUser={user} onSwipe={onSwipe} selectedPerson={selectedPerson} setSelectedPerson={setSelectedPerson} /><SwipeButtons  /></> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
