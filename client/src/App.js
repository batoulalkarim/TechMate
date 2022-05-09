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



function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([])
  const [currentIndex, setCurrentIndex] = useState(users.length - 1)
 
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
      createMatch(user, selectedUser, "declined", true)
    } else if (direction === 'left') {
      createMatch(user, selectedUser, "pending", false)
    }
  }

    function declineUser(){
        console.log("declined")
    }

    function approveUser(selectedUser){
      console.log('approved')
        updateMatch(user, selectedUser, "approved", true)
    }

    function updateMatch(user, selectedUser, status, likes){
      const updatedMatch = {
        requestor_id: user.id,
        receiver_id: selectedUser.id, 
        status: status,
        likes: likes 
      }
      const url ='/matches'
      const settings ={
        method: "PUT",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(updatedMatch)
      }
      fetch(url, settings)
      .then((res) => {
        console.log(res)
      })
      .catch(console.error)
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
  
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < users.length - 1

  const canSwipe = currentIndex >= 0

  const swipe = async (direction) => {
    // console.log('swipe')
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(direction) // Swipe the card!
    }
  }
  const goback = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  if(!user) return <BrowserRouter><LoginToggle setUser={setUser} /></BrowserRouter>

  return (
    <>
   
    <BrowserRouter>
      <Routes>
      <Route path="/acceptedmatches" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><AcceptedMatches currentUser={user} user={user} /></>} />
      <Route path="/requestsreceived" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><RequestsToMe currentUser={user} declineUser={declineUser} approveUser={approveUser} /></>} />
        <Route path="/pendingrequests" element={<><PersonalHeader setUser={setUser} /><RequestedMatches /><PendingRequests currentUser={user} /></>} />
        <Route path="/createaccount" element={<><PersonalHeader setUser={setUser} /><CreateAccount setUser={setUser} currentUser={user}/></>} />
        <Route path="/chat/:user" element={<><Header backButton="/chat"/><MessagesScreen /></>} />
        <Route exact path="/chat" element={<><Header backButton="/" /><Messages /></>} />
        <Route path="/myrequests" element={<><PersonalHeader /><RequestedMatches /></>} />
        <Route exact path="/" element={<><Header /><TinderCards currentUser={user} onSwipe={onSwipe} /><SwipeButtons swipe={swipe} goback={goback} /></> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
