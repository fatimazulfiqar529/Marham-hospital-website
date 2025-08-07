import React from "react";
import { useState } from "react";
import abid from '../assests/images/abid.png';
import Note from "./popa";
function Abid(){
    const [note,setNote]=useState(false);
    const handleClick= () =>{
        setNote (prev => !prev);
    }
    return(
<div className="doc">
        <div className="doctor mt-5 ms-5">
<div className="list ms-5 ps-3 pt-3 pb-3 pe-5  d-flex justify-content-start gap-3">
<img id="salman" src={abid}/>
<div className="d-flex flex-column gap-0">
    <p id="salu">Dr. Mr Abid Harif Awan</p>
    <p id="riaz">Physiotherapist<br/>
DPT, M.phil</p>
<div className="d-flex flex-row ms-5 ps-5 gap-5">
    <p id="riew">Reviews<br/><i className="review fas fa-thumbs-up"> 1</i></p>
    <p id="Experience" className="ms-5 ps-5">Experience<br/><strong>20 Yrs</strong></p>
    <p id="satisfy" className="ms-5 ps-5">Satisfaction<br/><strong>100%</strong></p>

</div>
</div>
<div className="d-flex flex-column gap-5 ms-5 ps-5">
    <button id="cal" >View Profile</button>
    <button id="dire">View Timings</button>
</div>

</div>
<div className="pe-5 d-flex flex-row  gap-0">
     
<div className="appointment  ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1" 
onClick={handleClick}>
    <p><span id="par">Iffat Anwar Medical Complex Hospital, Township, Lahore</span><br/>Available Today</p>
    <p>Rs. 2,000
    </p>
</div>


</div>
       </div>
{note && <Note setNote={setNote} />}

</div>
    );
}
export default Abid;