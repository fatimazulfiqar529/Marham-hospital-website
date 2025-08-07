import React from "react";
import './special.css';
function Special(){
    return(
        <div className="special mt-5">
           <p id="para" className="ps-5">Specialists in Iffat Anwar Medical Complex Hospital</p>
            <div className="d-flex justify-content-evenly gap-5 mt-5 pe-5 me-5">
                <div className="gen d-flex flex-column justify-content-start">
<p>Gastroenterologist</p>
<p>Neuro Surgeon</p>
<p>General Surgeon</p>
<p>Orthopedic Surgeon</p>
<p>Plastic Surgeon</p>
<p>Speech Therapist</p>
                </div>
                <div className="gen d-flex flex-column justify-content-start">
<p>Pediatrician</p>
<p>Anesthetist</p>
<p>Internal Medicine Specialist</p>
<p>Pain Specialist</p>
<p>Psychologist</p>
                </div>
                              <div className="gen d-flex flex-column justify-content-start">
<p>Gynecologist</p>
<p>Cardiologist</p>
<p>Nephrologist</p>
<p>Pediatric Surgeon</p>
<p>Radiologist</p>
                </div>
                                             <div className="gen d-flex flex-column justify-content-start">
<p>General Physician</p>
<p>Family Medicine</p>
<p>Nutritionist</p>
<p>Physiotherapist</p>
<p>Sonologist</p>
                </div>
            </div>
        </div>
    );
}
export default Special;