import React from "react";
import { useState } from "react";
import Mail from "./popk";
import sabeeka from '../assests/images/sabeeka.png';
function Sabeeka(){
    const [mail,setMail]=useState(false);
    const handleClick=()=>{
        setMail (prev => !prev);
    }
    return(
<div className="doc">
        <div className="doctor mt-5 ms-5">
<div className="list ms-5 ps-3 pt-3 pb-3 pe-5  d-flex justify-content-start gap-3">
<img id="salman" src={sabeeka}/>
<div className="d-flex flex-column gap-0">
    <p id="salu">Ms Sabeeka Pervaiz</p>
    <p id="riaz">Psychologist<br/>
BS (Hons) Clinical Psychology, MS Clinical Psychology</p>
<div className="d-flex flex-row ms-5 ps-5 gap-5">
    <p id="riew">Reviews<br/><i className="review fas fa-thumbs-up"> 53</i></p>
    <p id="Experience" className="ms-5 ps-5">Experience<br/><strong>7 Yrs</strong></p>
    <p id="satisfy" className="ms-5 ps-5">Satisfaction<br/><strong>94%</strong></p>

</div>
</div>
<div className="d-flex flex-column gap-5 ms-5 ps-5">
    <button id="cal" >Video Call</button>
    <button id="dire">View Timings</button>
</div>

</div>
<div className="pe-5 d-flex flex-row  gap-0">
     
<div className="appointment  ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1" onClick={handleClick}>
    <p><span id="par">Iffat Anwar Medical Complex Hospital, Township, Lahore</span><br/>Available Tomorrow</p>
    <p>Rs. 3,500
    </p>
</div>
<div className="appointment  ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1">
    <p><span id="par">Evercare Hospital, Nespak Housing Scheme, Lahore</span><br/>Available from Aug 12</p>
    <p>Rs. 3,500
    </p>
</div>
<div className="appointment  ms-5 ps-2 mb-2 pe-5 d-flex flex-column gap-1">
    <p><span id="par">Video Consultation</span><br/>Available Today</p>
    <p>Rs. 3,500
    </p>
</div>

</div>
       </div>
       {mail && <Mail setMail={setMail}/>}
</div>
    );
}
export default Sabeeka;
