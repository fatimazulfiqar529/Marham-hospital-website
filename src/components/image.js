import React from "react";
import { useState } from "react";
import './image.css';
import hospi from '../assests/images/hospi.png';
function Image(){
            const [Pop ,setPop]= useState(false);
const [isChecked,setIsChecked]=useState(false);
    return(

        <div className="image mt-3 ms-5">
            <div className="hospital ps-3 pt-3 pb-3 d-flex flex-row justify-content-start gap-5">
<img id="hospi" src={hospi}/>
<div className="d-flex flex-column justify-content-center gap-1">
<p className="name ms-5 ps-5">Iffat Anwar Medical Complex Hospital, Lahore</p>
<p className="address ms-5 ps-5">16 - Awaisia Society, Near Ghazi Chowk College Road, Township</p>
<div className="button d-flex justify-content-center gap-5">
    <button id="direc" onClick={()=> window.location.href="https://www.google.com/maps?q=31.439148,74.284567"}>View Direction</button>
    <button id="call" onClick={()=> (setPop(true))}>Call Helpline</button>
{
    Pop &&(
        <div class="func">
        <h3>Open Pick an app?</h3>
        <p> https://www.marham.pk wants to open this application.</p>
      <label>
        <input type="checkbox" onChange={()=> setIsChecked(!isChecked)}/>
          Always allow www.marham.pk to open links of this type in associated app.
      </label>
      <div className="d-flex justify-content-end gap-3">
        <button id="buu">Open Pick an app</button>
        <button id="buu" onClick={()=>setPop(false)}>Cancel this</button>
      </div>
        </div>
    )
}
</div>
</div>
</div>
        </div>
    );
}
export default Image;