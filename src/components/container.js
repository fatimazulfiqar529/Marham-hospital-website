import React from "react";
import './container.css';
function Container(){
    return(
        <div className="contains mt-3 ms-5 pb-3">
            <div class="contain mt-3 pt-3 ps-2  d-flex flex-row gap-3">
                <p>Marham
                <span id="logo"> &gt;</span></p>
                <p>Hospitals
                <span id="logo"> &gt;</span></p>
                <p>Hospitals in Lahore
                <span id="logo"> &gt;</span></p>
                <p id="black">Iffat Anwar Medical Complex Hospital</p>
            </div>
        </div>
    );
}
export default Container;