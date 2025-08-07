import React from "react";
import { useState } from "react";
import './popk.css';

function Mail({setMail}){
    const [Popup,setPopup]=useState(false);
    return(
        <div className="hello pt-3 ps-5 pe-5 pb-3 text-start">
            <div className="d-flex flex-row justify-content-between">
            <h5 id="app">Book Appointment Now</h5>
            <i id="cross" className="fas fa-times" onClick={() => setMail(false)}></i>
            </div>   
            <div className="now d-flex flex-column ps-3 pt-3 pb-2 pe-5">
                    <p className="text-start"><span id="par" className="text-decoration-underline">Iffat Anwar Medical Complex Hospital</span>,<br/> Township, Lahore<br/>Available from Aug 10<br/>
08 Aug - 02:30 PM | <span id="navy">Change Date & Time</span></p>
            </div>
                  <div className="no d-flex flex-column gap-3 mt-3 ps-3 pt-3 pb-2 pe-3">
                   <label className="no d-flex flex-column gap-3">
                    <div className="d-flex flex-row">
                    <button id="but">
                        <img src="https://flagcdn.com/w20/pk.png" alt="Pakistan Flag" />
+92</button>
                   <input id="inp" type="tel" placeholder="Add Phone number"/>
                   </div>
                   <input id="inp" type="text" placeholder="Add Patient Name"/>
                   </label>
                 <div className="d-flex gap-2">
  <input type="checkbox" />
  <label>Are you booking from outside Lahore?</label>
</div>

                   <p id="tick"><i className="fas fa-check"></i>Get contact details and clinic direction in message<br/>
<i className="fas fa-check"></i>Priority customer support if needed</p>
<button id="dir">Book Appointment</button>
            </div>

        </div>
    )
}
export default Mail;