import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginToggle({setUser}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div className="login_toggle_container">
             <img 
            src="https://im5.ezgif.com/tmp/ezgif-5-22f155e120.png" 
            alt="tinder logo" 
            className="logotoggle"/>
            <h1 className="tindev">tinDev</h1>
            <div className="toggle">
            {showLogin ? (
                <>
                    <LoginForm setUser={setUser} className="form"/>
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
                <SignupForm setUser={setUser}  className="form"/>
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
        </div>
    )
}

export default LoginToggle;