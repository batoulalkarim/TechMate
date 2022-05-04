import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function CreateAccount({user}){
    const [job, setJob] = useState('')
    const [birthdate, setBirthdate] = useState('');
    const [location, setLocation] = useState('');
    const [profilepic, setProfilepic] = useState(null);
    const [bio, setBio] = useState('');
    const [profile, setProfile] = useState('');
    const [age, setAge] = useState('');
    const [interested_in, setInterested_in] = useState('');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);


    function handleSubmit(e){
        e.preventDefault();
        const profile = {
            profilepic, 
            job,
            birthdate,
            location,
            age,
            bio,
            interested_in
        }
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(profile)
        })
        .then(res => {
            if(res.ok){
                console.log(profile)
                res.json().then(setProfile(profile))
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    function uploadImage(){
        const formData = new FormData();
        formData.append('profilepic', setProfilepic)
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            body: formData
        })
        .then(res => {
            if(res.ok) {
                console.log(formData)
                // res.json().then(setProfilepic)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    function handleChange(event){
       setProfilepic({profilepic: event.target.files[0]})
    }

return(
   <div>
       <div>
       <h3>Upload a profile pic</h3>
       <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data'>
           <input type="file" name="image_path"  onChange={handleChange} />
           <button onClick= {() => uploadImage()}>Upload</button>
       <br />
       <br />
       <label>When's your Birthday?
        <br />
       <input type="date" id="bday" name="birthdate" value={birthdate} max="2004-01-01" onChange={(e) => setBirthdate(e.target.value)} />
       <br />
       </label>
       <label>
        <br />
        What city are you in?
        <br />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
        <br />
        What do you do for a living? 
        <br />
        <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
        How old are you? 
        <br />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
         <br />
         <br />
         <label>Show me</label>
        <br />
        
        <select value={interested_in} onChange={(e) => setInterested_in(e.target.value)}>
            <option value="select an option">Select an option</option>
            <option value="men">Men</option>
            <option value='women'>Women</option>
            <option value='everyone'>Everyone</option>
        </select>  
        <br /> 
        <br /> 
        <label>
            What do you want people to know about you?
            <br />
            <textarea value={bio} rows="4" cols="40" onChange={(e) => setBio(e.target.value)}></textarea>
        </label>
        <br />
        <br />
        <Link to="/">
            <button onClick={handleSubmit}>Save</button>
        </Link>
        </form>
        </div>
        <div>
             
        </div>
   </div>
)
  
}
export default CreateAccount;