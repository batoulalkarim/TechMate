import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm({setUser}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

 
    let navigate = useNavigate()

    function handleSignup(e){
        e.preventDefault()
        const user = {
            username, 
            password,
            name,
            email 
        }
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(setUser)
                navigate('createaccount')
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }


    return(
        <div>
            <form onSubmit={handleSignup} className="signupform">
            <h1>We're Happy You're Here</h1>
            <label>
               Full Name: 
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <br />
            <label>
                Email:
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <br />
            <label>
                Username:
                <br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
            <br />
                Password:
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <br />
        
            <button type="submit">
                Sign up
            </button>
          
            </form>
        </div>
    )
}

export default SignupForm;