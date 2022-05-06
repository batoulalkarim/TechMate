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


  function handleaddtorequestsfromme(){

  }

  function handlereject(user){
    const foundIndex = users.findIndex(item => user.id === item.id);
    if (foundIndex === -1) {
        console.log("User isn't in your matches")
    } else {
        const copyArray = [...users];
        copyArray.splice(foundIndex, 1);

        setUsers(copyArray)
    }
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })

    console.log("You rejected " + user.name);
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
        <Route exact path="/" element={<><Header /><TinderCards onSwipeRight={handleaddtorequestsfromme} onSwipeLeft={handlereject}/><SwipeButtons users={users} setUsers={setUsers}/></> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
