import React from "react";
import { useState } from "react";
import zaheer from '../assests/images/zaheer.png';
import Alert from "./popw";
function Zaheer(){
    const[alert,setAlert]=useState(false);
    const handleClick=()=>{
        setAlert(prev=>!prev)
    }
    return(
        <div className="doc">
        <div className="doctor ps-5 pe-5 mt-5 w-100">
<div className="list pt-3 ps-5 pe-5 pb-3 d-flex justify-content-start gap-3">
<img id="salman" src={zaheer}/>
<div className="d-flex flex-column gap-0">
    <p id="salu"> Dr. Zaheer Ud din</p>
    <p id="riaz"><span id="green"><i className="fas fa-circle-check"></i>PMDC Verified</span><br/>MBBS</p>
<div className="d-flex flex-row ms-5 ps-5 gap-5">
    <p id="riew">Reviews<br/><i className="review fas fa-thumbs-up"> 2</i></p>
    <p id="Experience" className="ms-5 ps-5">Experience<br/><strong>32 Yrs</strong></p>
    <p id="satisfy" className="ms-5 ps-5">Satisfaction<br/><strong>100%</strong></p>

</div>
</div>
<div className="d-flex flex-column gap-5 ms-5 ps-5">
    <button id="cal" >View Profile</button>
    <button id="dire">View Timings</button>
</div>

</div>
<div className="pe-5 d-flex flex-row  gap-0">
     
<div className="appointment  ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1" onClick={handleClick}>
    <p><span id="par">Iffat Anwar Medical Complex Hospital, Township, Lahore</span><br/>Available Tomorrow</p>
    <p>Rs. 500
    </p>
</div>


</div>
       </div>
       {alert && <Alert setAlert={setAlert}/>}
</div>

    );
}
export default Zaheer;