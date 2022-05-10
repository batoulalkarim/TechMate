import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import UploadImages from './UploadImages';
import MultiImageInput from 'react-multiple-image-input'



function CreateAccount({currentUser, setUser}){
    const [job, setJob] = useState('')
    const [birthdate, setBirthdate] = useState('');
    const [location, setLocation] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [interested_in, setInterested_in] = useState('');
    const [images, setImages] = useState({});
    const [errors, setErrors] = useState([]);

   
    console.log(currentUser)

    function updateProfile(e){
        e.preventDefault();
        console.log("save button was hit")
        const updatedProfile = {
            job: job, 
            birthdate: birthdate, 
            age: age, 
            interested_in: interested_in,
            bio: bio, 
            location: location, 
            profilepic: profilepic
        }
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedProfile)
        })
        .then(res => {
            if(res.ok) {
                console.log(setUser)
                res.json().then(setUser)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }
   
    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100"
      }

      const onChangePicture = e => {
          console.log('picture: ', profilepic)
          setProfilepic([...profilepic, e.target.files[0]]);
      }
return(
    <div>
   <div className="accountdetails_container">
           <div className="accountdetails_left">
       <h3>Update Your Profile Pic</h3>
       <form onSubmit={updateProfile} >
           <input name="profilepic" type="file" onChange={(e) => onChangePicture(e)}  />
       <br />
       <br />
       <div className="accountdetails_item">
       <label>Birthday
        <br />
       <input className="accountdetails_input" type="date" id="bday" name="birthdate" value={birthdate} max="2004-01-01" onChange={(e) => setBirthdate(e.target.value)} />
       <br />
       </label>
       </div>
       <div className="accountdetails_item">
       <label>
        <br />
        Location
        <br />
        <input className="accountdetails_input" name="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        </div>
        <div className="accountdetails_item">
        <br />
        <label>
        <br />
        What do you do for a living? 
        <br />
        <input type="text" className="accountdetails_input" value={job} name="job" onChange={(e) => setJob(e.target.value)} />
        </label>
        </div>
        <br />
        <div className="accountdetails_item">
        <br />
        <label>
        How old are you? 
        <br />
        <input type="text" className="accountdetails_input" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        </div>
         <br />
         <br />
         <div className="accountdetails_item">
         <label>Show me</label>
        <br />
        
        <select className="accountdetails_input"  name="interested_in" value={interested_in} onChange={(e) => setInterested_in(e.target.value)}>
            <option value="select an option">Select an option</option>
            <option value="men">Men</option>
            <option value='women'>Women</option>
            <option value='everyone'>Everyone</option>
        </select>  
        <br /> 
        <br /> 
        </div>
        <div className="accountdetails_item">
        <label>
            What do you want people to know about you?
            <br />
            <textarea className="accountdetails_input" value={bio} name="bio" rows="4" cols="40" onChange={(e) => setBio(e.target.value)}></textarea>
        </label>
        </div>
        
        <br />
        <br />
        <button className="accountdetails_button" type="submit">Save</button>

        </form>
        </div>
        <div className="accountdetails_right">
             <h1>upload rest of pictures here</h1>
             <MultiImageInput
                max={4}
                width={350}
                height={350}
                theme="light"
                value={images}
                images={images}
                setImages={setImages}
                cropConfig={{ crop, ruleOfThirds: true }}
                />
        </div>
   </div>
   
        {/* <Link to="/"> */}
            {/* <button className="accountdetails_button" type="submit">Save</button> */}
        {/* </Link> */}
       
   </div>
)
  
}
export default CreateAccount;