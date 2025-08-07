import React from "react";
import { useState } from "react";
import './doctor.css';
import salman from '../assests/images/salman.png';
import Popup from './pop';
import "./pop.css";

function Doctor(){
     const [Show, setShow] = useState(false);
      const handleClick = () => {
    setShow(prev => !prev);
  };
    return(
        <div className="doc mt-5">
                                   <p id="para" className="ps-5">Iffat Anwar Medical Complex Hospital Doctors List</p>
        <div className="doctor mt-5 ms-5">
<div className="list mt-5 ms-5 ps-3 pt-3 pb-3 pe-5  d-flex justify-content-start gap-3">
<img id="salman" src={salman}/>
<div className="d-flex flex-column">
    <p id="salu">Salman Riaz</p>
    <p id="riaz">MS Clinical Psychology, Advanced Diploma in Clinical Psychology (ADCP), Dip. MD (Alternative Medicines), Addiction Specialist, Hijama Specialist, Pain Management Specialist, Medical Emergency Specialist, PGD in Dermatology and Skin Aesthetics with Cosmetology, PGD in Diabetes Management, Dip in Diabetology with Evolution, Dip in Chiropractor, PGD Occupational Therapy</p>
<div className="d-flex flex-row ms-5 ps-5 gap-5">
    <p id="riew">Reviews<br/><i className="review fas fa-thumbs-up"> 88</i></p>
    <p id="Experience" className="ms-5 ps-5">Experience<br/><strong>8 Yrs</strong></p>
    <p id="satisfy" className="ms-5 ps-5">Satisfaction<br/><strong>94%</strong></p>

</div>
</div>
<div className="d-flex flex-column gap-5">
    <button id="cal">Video Call</button>
    <button id="dire">View Timings</button>
</div>

</div>
<div className="pe-5 d-flex flex-row gap-0">
     
<div className="appointment  ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1"
onClick={handleClick}>
    <p><span id="par">Iffat Anwar Medical Complex Hospital, Township, Lahore</span><br/>Available from Aug 10</p>
    <p>Rs. 4,000</p>
</div>
<div className="appointment ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1">
    <p><span id="par">United Christian Hospital, Gulberg, Lahore</span><br/>Available Today</p>
    <p>Rs. 4,000</p>
</div>
<div className="appointment ms-5 ps-2 mb-2 pe-2 d-flex flex-column gap-1">
    <p><span id="par">Zia Hospital and Maternity Hospital, Ideal Housing Scheme, Lahore</span><br/>Available Today</p>
    <p>Rs. 5,000</p>
</div>

</div>
        </div>
              {Show && <Popup setShow={setShow} /> }

        </div>
    );
}
export default Doctor;