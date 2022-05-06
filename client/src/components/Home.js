import React, {useState, useEffect} from 'react';
import {Link, useParams } from 'react-router-dom';
import UserCard from './UserCard';
import PotentialMatches from './PotentialMatches';
import RequestedMatches from './RequestedMatches';

function Home({user, onDelete, onAddToMatchRequests}) {
    const [users, setUsers] = useState([]);
    const [requestor_id, setRequestor_id] = useState([]);
    const [requestMatchList, setRequestMatchList] = useState([]);
    const [errors, setErrors] = useState([]);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [matches, setMatches] = useState([]);
    const [newMatch, setNewMatch] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    },[])

    useEffect(() => {
        fetch('http://localhost:3000/matches')
        .then(res => res.json())
        .then(matches => {
            console.log(matches)
            setMatches(matches)
        })
    }, [])


    function handleSearchChange(e) {
        setSearch(e.target.value)
    }

    const filteredSearch = users.filter( user => {
        return((user.name.toLowerCase().includes(search.toLowerCase())))
    })


    function handleRejectThisUser(user){
        // event.stopPropagation();
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

        console.log("you swiped no on " + user.name);
    }

    function handleAddToMatchList(user){
        const foundIndex = requestMatchList.findIndex(item => user.id === item.id);
        if(foundIndex === -1) {
            setRequestMatchList([...requestMatchList, user.name])
        } else {
            console.log("test")
        }
    }
    
   
    function handleRemoveRequest(user){
        const foundIndex = requestMatchList.findIndex(item => user.id === item.id);
        if(foundIndex === 1) {
            console.log("Request to Match doesn't exist!")
        } else {
            const copyArray = [...requestMatchList];
            copyArray.splice(foundIndex, 1);

            setRequestMatchList(copyArray);
        }
    }

    return(
        <div>
        <div className="navflex">
            <h4>{user.name}</h4>
        </div>
        <div className="userflexcont">
            <div className="userleftflex">

            </div>
            <div className="userrightflex">
                <img src={user.profilepic} alt="oh no" />
            </div>
            <div className='userhomebody'>
                <div className="userleft">
                    <h4>Requested Matches</h4>
                    
                    <input type="search" placeholder="Search Matches" value={search} onChange={handleSearchChange} />
                    <RequestedMatches requestMatchList={requestMatchList} onDelete={handleRemoveRequest} />
            { showSearch ? 
            
                filteredSearch.map(user => {
                    if (user.username) {
                        return (
                            <UserCard key={user.id} user={user} onMatchRequest={handleAddToMatchList} onDelete={onDelete}/>
                        )} 
                        else return null;
                        }
                    )
                    : null 
                    }
                    <p>test</p>
                </div>
               
                <div className="userright">
                    <h2>Match with someone</h2>
                    <div className="matchcont">
                     <PotentialMatches users={users} onDelete={handleRejectThisUser} onMatchRequest={handleAddToMatchList} setUsers={setUsers}/>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Home;