import React from "react";
import { useState } from "react";
import './load.css';
import Waseem from "./waseem";
import Zaheer from "./zaheer";
function Load(){
    const [eye,setEye]=useState(false);
    const handleClick=()=>{
        setEye(prev=>!prev);
    }
    return(
<div className="load ms-5 pt-3 me-5 pb-5">
    <div className="d-flex me-5 flex-column align-content-center align-items-center justify-content-center gap-5">
         {eye && <Waseem/>}
         {eye && <Zaheer/>}
    <button id="more" onClick={handleClick}
    >Load</button>
    </div>
    <div className="about mt-5 ps-5 ms-5">
    <p className="namme mt-5 ms-3">About Iffat Anwar Medical Complex Hospital, Lahore</p>
    <p id="iffat" className="mt-3">Marham has enlisted 46 qualified and experienced doctors available at Iffat Anwar Medical Complex Hospital, Lahore. They provide diagnosis and treatment for a wide range of major and minor medical conditions. The hospital also provides various services, helping patients to acquire quality healthcare.</p>
    <p id="iffat" className="mt-3">You can book an appointment or consult online with any doctor available at Iffat Anwar Medical Complex Hospital, Lahore based on their medical experience, availability hours, fee range, clinic/hospital location, services, and positive reviews from patients. All the doctors available in this hospital are well-qualified and experienced in their respective specialties, and you can find their complete details on Marham.</p>
    </div>
    <div className="d-flex flex-column  ms-5 ps-5 mt-4">
        <p className="namme ms-2">Top Doctors at Iffat Anwar Medical Complex Hospital, Lahore</p>
        <p id="iffat" className="ms-2">The top doctors available at Iffat Anwar Medical Complex Hospital, Lahore are as follows:</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Asst. Prof. Dr. Fahad Nazir</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Mr Abid Harif Awan</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Muhammad Imran</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Ms Sabeeka Pervaiz</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Muhammad Waqas Saleem</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Muhammad Waseem Hassan</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Asad Ahmed Rao</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Faiza Shahzad</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Ehsan Ul Haq Rafiq</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr.Salman Riaz</p>
         </div>
 <div className="about ps-5 ms-5">
    <p className="namme mt-3 ms-3">Iffat Anwar Medical Complex Hospital Timings</p>
    <p id="iffat" className="mt-3 ms-2">The different departments at Iffat Anwar Medical Complex Hospital are operational at different times. You can further check the appointment timings and availability of the doctors by calling Marham at <span id="num">0311-1222398</span>.</p>
    </div>
     <div className="about ps-5 ms-5">
    <p className="namme mt-3 ms-3">Iffat Anwar Medical Complex Hospital Address</p>
    <p id="iffat" className="mt-3 ms-2">The address of the Iffat Anwar Medical Complex Hospital, Lahore is <strong>16 - Awaisia Society, Near Ghazi Chowk College Road, Township, Lahore.</strong></p>
    </div>
        <div className="about ps-5 ms-5">
    <p className="namme mt-3 ms-3">Iffat Anwar Medical Complex Hospital Contact Number</p>
    <p id="iffat" className="mt-3 ms-2">You can seek any information about Iffat Anwar Medical Complex Hospital, Lahore by calling <span id="num">0311-1222398</span>.</p>
    </div>
         <div className="about ps-5 ms-5">
    <p className="namme mt-3 ms-3">Appointment Details</p>
    <p id="iffat" className="mt-3 ms-2">If you want to book an appointment or consult online with any doctor at Iffat Anwar Medical Complex Hospital, Lahore, then call Marham’s helpline at <span id="num">0311-1222398</span> or you can also book online.</p>
       <p id="iffat" className="mt-3 ms-2">Moreover, you can also call our helpline to know the availability of doctors and services or to schedule your consultation at Iffat Anwar Medical Complex Hospital, Lahore.</p>
     <p id="iffat" className="mt-3 ms-2">Furthermore, you can also download our app on Android and IOS by clicking here to find more information regarding the service or doctor you’re searching for.</p>
     <p id="iffat" className="mt-3 ms-2">We look forward to being a partner in your journey to perfect health!</p>
    </div>
             <div className=" d-flex flex-column justify-content-start gap-3 ps-5 ms-5">
    <p className="namme mt-3 ms-2">Frequently Asked Questions</p>
    <div className="dropend">
    <button id="question" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
>
          <span className="me-5 pe-3">Who are the most experienced doctors in Iffat Anwar Medical Complex Hospital, Lahore?</span>
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item"><p id="expens">The following are the most experienced doctors in Iffat Anwar Medical Complex Hospital, Lahore:</p>
              <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Asst. Prof. Dr. Fahad Nazir</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Muhammad Umer Saeed</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Muhammad Imran</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Ms Sabeeka Pervaiz</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Nouman Hameed</p>
            </a></li>
    </ul>
    </div>
        <div className="dropend">
    <button id="question" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
>
          <span className="me-5 pe-5">Who are the top reviewed doctors in Iffat Anwar Medical Complex Hospital, Lahore?</span>
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item"><p id="expens">The following are the top reviewed doctors in Iffat Anwar Medical Complex Hospital, Lahore:</p>
              <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Iftakhar Ahmed</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Nabeel Ahmed</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Waseem Hassan</p>
        <p id="complex ms-2"> <i id="circle" className="fas fa-circle"></i>  Dr. Zaheer Ud Din</p>
            </a></li>
    </ul>
    </div>
     <div className="dropend">
    <button id="question" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
>
          <span className="me-5 pe-5">What are the operational timings of Iffat Anwar Medical Complex Hospital, Lahore?</span>
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item"><p id="expens">The operational timings of Iffat Anwar Medical Complex Hospital<br/> may vary by department. However, the hospital's emergency<br/> is operational 24/7. For specific information, you can call us<br/> on Marham at <span id="num">0311-1222398</span>.</p>
            </a></li>
    </ul>
    </div>
        <div className="dropend">
    <button id="question" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
>
          <span className="me-5 pe-3">How to book an appointment with any doctor at Iffat Anwar Medical Complex Hospital?</span>
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item"><p id="expens">You can book an appointment with any doctor or get any service available at Iffat Anwar<br/> Medical Complex Hospital via Marham. You can also schedule<br/> an appointment by calling Marham’s helpline at 0311-1222398.</p>
            </a></li>
    </ul>
    </div>
           <div className="dropend">
    <button id="question" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"
>
          <span className="me-5 pe-5 ms-5 ps-4">Do I have to pay any extra charges if I book an appointment via Marham?</span>
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item"><p id="expens">No! You don't have to pay extra charges if you book your appointment via Marham.</p>
            </a></li>
    </ul>
    </div>
    </div>
</div>
    );
}
export default Load;