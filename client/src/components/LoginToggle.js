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
                <h1 className="slogan">Make The First Move</h1>
                {hideTitle ? (
                    console.log("title hidden")
                ) : (
                    <div>
                    <br />
                    <button onClick={(e) => handleSignUpToggle(e)} className="createbutton">CREATE ACCOUNT</button>
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
                    <div>
                        <p ><strong>LEGAL</strong></p>
                        <br />
                        <p className="individual">Privacy</p>
                        <p className="individual">Terms</p>
                        <p className="individual">Cookie Policy</p>
                        <p className="individual">Intellectual Property</p>
                    </div>
                    <div>
                        <p><strong>CAREERS</strong></p>
                        <br />
                        <p className="individual">Careers Portal</p>
                        <p className="individual">Tech Blog</p>
                    </div>
                    <div >
                        <p ><strong>SOCIAL</strong></p>
                        <br />
                        <p className="individual">insta</p>
                        <p className="individual">twitter</p>
                        <p className="individual">tiktok</p>
                        <p className="individual">youtube</p>
                        <p className="individual">facebook</p>
                    </div>
                    <div >
                        <p><strong>FAQ</strong></p>
                        <br />
                        <p className="individual">Destinations</p>
                        <p className="individual">Press Room</p>
                        <p className="individual">Contact</p>
                        <p className="individual">Promo Code</p>
                    </div>
                </div>
                <div className="home_bottomtext">
                    <h3><strong>GET THE APP!</strong></h3>
                    <br />
                    <br />
                    <p className="bottomtext">Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on TechMate. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With TechMate, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, TechMate’s here to bring you all the sparks.</p>
                        <br />
                    <p className="bottomtext">There really is something for everyone on TechMate. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? TechMate U’s got you covered. TechMate isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
                </div>
                <br />
                <div className="home_footer">
                    <div>
                        <p>FAQ  /  Safety Tips  /  Terms  /  Cookie Policy  /  Privacy Settings</p>
                    </div>
                    <div>
                        <p>Thank you Gerald for accidentally coming up with the name 😁</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginToggle;