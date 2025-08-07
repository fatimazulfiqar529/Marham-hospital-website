import React from "react";
import './similar.css';
function Similar(){
return(
<div className="Similar mt-3 ps-5 ms-5">
        <p className="namme mt-5 ms-4">Similar Hospitals in Lahore</p>
        <div className="d-flex flex-row justify-content-evenly mt-5">
            <div className="d-flex flex-column justify-content-start">
                <p id="complex">Centre of Orthodontics</p>
               <p id="complex">Ruqayya Medical Center</p>
                <p id="complex">Evercare Hospital</p>
                <p id="complex">Dr Ch Muhammad Tahir Skin & Laser Centre</p>
                <p id="complex">Hafeez Hospital</p>
            </div>
                 <div className="d-flex flex-column justify-content-start">
                <p id="complex">Hajira Medical Complex</p>
               <p id="complex">Shamoona Zafar Medical & Children Comple</p>
               <p id="complex">Shifa Gynae Clinic & Healthcare Center</p>
                <p id="complex">Dental Clinic 112 B</p>
                <p id="complex">Allah Yar Khan Mother and Child Care Hospital</p>
                <p id="complex"></p>
            </div>
        </div>
</div>
);
}
export default Similar;
