import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginToggle({setUser}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            <h1>TechMate</h1>
            {showLogin ? (
                <>
                    <LoginForm setUser={setUser} />
                    <br />
                    <p>
                        Don't have an account? &nbsp;
                        <button onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ): (
                <>
                <SignupForm setUser={setUser} />
                <br />
                <p>
                    Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>
                        Log In
                    </button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginToggle;