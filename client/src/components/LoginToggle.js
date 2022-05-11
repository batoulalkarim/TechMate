import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginToggle({setUser}){
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    const [hideTitle, setHideTitle] = useState(false)

    function handleLoginToggle(){
        setShowLogin(true)
        setShowSignUp(false)
        setHideTitle(true)
    }

    function handleSignUpToggle(){
        setShowSignUp(true)
        setShowLogin(false)
        setHideTitle(true)
    }
    return(
        <div className="login_toggle_container">
            <div className="home_top">
            <div className="login_header"> 
            <div className="header_left">
             <img 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem-768x432.jpg" 
            alt="tinder logo" 
            className="logotoggle"/>
            <h1 className="tindev">TechMate</h1>
            </div>
            <div>
                
                {showLogin ? (
                    <button className="login_button" onClick={(e) => handleSignUpToggle(e)}>SIGN UP</button>
                ): (
                    <button className="login_button" onClick={(e) => handleLoginToggle(e)}>LOGIN</button>
                )}
            </div>
            </div>
            <div className="toggle">
                {hideTitle ? (
                    console.log("title hidden")
                ) : (
                    <div>
                    <h2>Make The First Move</h2>
                    <button onClick={(e) => handleSignUpToggle(e)}>Create Account</button>
                    </div>
                )}
                {showLogin ? (
                    <>
                        <LoginForm setUser={setUser} className="form" />
                    </>
                ) : (
                    console.log("login set to false")
                )}
                {showSignUp ? (
                    <>
                        <SignupForm setUser={setUser} className="form" />
                    </>
                ) : (
                    console.log("signup set to false")
                 
                )}
            
            </div>
            </div>
            <div className="home_bottom">
                <div className="home_reviews">
                    <div className="individual_review">
                        <h4 className="home_name">Leslie & Jake</h4>
                        <p className="home_rev_content">Just got out of a bad breakup and thought I'd give TechMate a chance, little did I know my first match would end up being my husband!</p>
                    </div>
                    <div className="individual_review">
                        <h4 className="home_name">Ryan & Lara</h4>
                        <p className="home_rev_content">I had given up on love.. thats actually why I got on this app. I just wanted to find someone to casually hook up with.. but then I met Ryan! Thank you TechMate for introducing me to the father of my children!!</p>
                    </div>
                    <div className="individual_review">
                        <h4 className="home_name">Batoul & Mehran</h4>
                        <p className="home_rev_content">Either I'm lucky, or TechMate is the ultimate match maker for people in Tech! I met Mehran on TechMate 7 years ago and we've been married for 5! 10/10 app!</p>
                    </div>
                </div>
                <div className="social_legal">
                    <h1>socials and legals go here</h1>
                </div>
                <div className="home_bottomtext">
                    <h1> why u should use techmate</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginToggle;