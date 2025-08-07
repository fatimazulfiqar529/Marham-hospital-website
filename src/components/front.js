import React from "react";
import './front.css';
import Navbar from "./navbar";
import Container from "./container";
import Image from "./image";
import Special from "./special";
import Doctor from "./doctor";
import Fahad from "./fahad";
import Sidra from "./sidra";
import Abid from "./abid";
import Sabeeka from "./sabeeka";
import Load from "./Load";
import Similar from "./similar";
function Front(){
    return(
<div className="items">
    <Navbar />
    <Container />
    <Image />
    <Special />
    <Doctor />
    <Fahad />
    <Sidra />
    <Abid />
    <Sabeeka />
    <Load />
    <Similar />
    <div className="copy mt-3 pt-5 ps-5 pe-5 pb-5 mb-5">
        <div className="d-flex flex-column">
            <div className="right d-flex justify-content-start gap-4 ms-5 ps-5">
                <p>Term & Policies</p>
             <p>About Us</p>
                <p>Doctors</p>
                <p>All Cities</p>
                <p>All Doctors</p>
            </div>
            <div className="d-flex justify-content-start gap-1 ms-5 ps-5">
                <p id="iffat">Copyrights @ Marham Inc. All rights reserved since 2016 - 2025</p>
                </div>


        </div>
    </div>
</div>

    );
}
export default Front;