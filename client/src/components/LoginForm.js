import React, { useState } from 'react'

function LoginForm({setUser}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)
        const user = {
            username,
            password 
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            setIsLoading(false)
            if(res.ok) {
                console.log(user)
                res.json().then(setUser)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }


    return(
        <div>
            <h1>Welcome Back!</h1>
            <form onSubmit={handleLogin} className="LoginForm">
            <label>
                Username
                <br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <input type="submit" value="Login" onClick={() => setLogin(true)} />
            </form>
        </div>
    )
}

export default LoginForm;