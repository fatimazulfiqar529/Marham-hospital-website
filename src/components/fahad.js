import React from "react";
import { useState } from "react";
import './fahad.css';
import fahad from '../assests/images/fahad.png';
import Alert from "./popf";
function Fahad(){
    const [alert,setAlert]=useState(false);
    const handleClick = () =>{
        setAlert (prev =>!prev);
    }
    return(
        <div className="doc">
        <div className="doctor mt-5 ms-5">
<div className="list ms-5 ps-3 pt-3 pb-3 pe-5  d-flex justify-content-start gap-3">
<img id="salman" src={fahad}/>
<div className="d-flex flex-column gap-0">
    <p id="salu">Asst. Prof. Dr. Fahad Nazir</p>
    <p id="riaz"><span id="green"><i className="fas fa-circle-check"></i>PMDC Verified</span><br/>Orthopedic Surgeon<br/>
MBBS, FCPS (Orthopedic Surgery), MRCS, FACS</p>
<div className="d-flex flex-row ms-5 ps-5 gap-5">
    <p id="riew">Reviews<br/><i className="review fas fa-thumbs-up"> 116</i></p>
    <p id="Experience" className="ms-5 ps-5">Experience<br/><strong>11 Yrs</strong></p>
    <p id="satisfy" className="ms-5 ps-5">Satisfaction<br/><strong>100%</strong></p>

</div>
</div>
<div className="d-flex flex-column gap-5 ms-5 ps-5">
    <button id="cal" >Video Call</button>
    <button id="dire">View Timings</button>
</div>

</div>
<div className="pe-5 d-flex flex-row  gap-0"
onClick={handleClick}>
     
<div className="appointment  ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1">
    <p><span id="par">Iffat Anwar Medical Complex Hospital, Township, Lahore</span><br/>Available Tomorrow</p>
    <p>Rs. 2,000
        <button className="online ms-2">Pay Online & Save Rs. 200</button>
    </p>
</div>
<div className="appointment ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1">
    <p><span id="par">KKT Orthopedic Spine Center Johar Town Branch, Johar Town, Lahore</span><br/>Available Today</p>
     <p>Rs. 2,000
        <button className="online ms-2">Pay Online & Save Rs. 200</button>
    </p>
</div>
<div className="appointment ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1">
    <p><span id="par">Punjab Medical Complex Hospital, People Colony, Gujranwala</span><br/>Available from Aug 09</p>
      <p>Rs. 1,500
        <button className="online ms-2">Pay Online & Save Rs. 150</button>
    </p>
</div>

</div>
       </div>
{alert && <Alert setAlert={setAlert}/>}
</div>

    );
}
export default Fahad;