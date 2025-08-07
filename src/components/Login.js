import React from "react";
import './Login.css';
function Login(){
    return(
<div className="login mt-5 pt-5 ms-5 ps-5 mb-5 pb-5 pe-5 me-5 w-75 h-50">
    <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <h5>If You want To get Update of EveryThing Plz Login</h5>
            <button id="call">Login Here</button>
            <form className="d-flex flex-column align-items-center w-100 gap-3">
                <input id="in" type="text" placeholder="Enter Username"/>
                <input id="in" type="email" placeholder="Enter Email"/>
                 <input id="in" type="text" placeholder="Create Password"/>
                <input id="in" type="text" placeholder="Confirm Password"/>
            </form>
            <button id="direc">Login</button>
        </div>
    <div className="d-fles flex-column align-content-center align-items-center gap-3">
<h5>Download Marham App</h5>
<p>Find, Book and Consult Pakistan’s Best Doctors</p>
<div className="d-flex flex-row gap-3">
    <button id="call" onClick={()=>{window.location.href="https://play.google.com/store/apps/details?id=controllers.marham.marhammed"}}>Get It On Play Store</button>
    <button id="direc" onClick={()=>{window.location.href="https://apps.apple.com/pk/app/marham-find-a-doctor/id1095243102"}}>Get it On Apple Store</button>
</div>
</div>
</div>
</div>
    );
}
export default Login;