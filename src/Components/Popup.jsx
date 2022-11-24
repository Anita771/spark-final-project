import React from "react";
import BookingForm from "./BookingForm";
import './Popup.css'


export default function Popup({setTrigger,course,trigger,children}) {

    return (trigger)? (
        <div className="popup">
            <div className="popup-inner">
            <BookingForm course = {course}/> 

                <button className="close-btn" onClick={()=> setTrigger(false) }>X</button>
                {children}
            </div>
        </div>
    ): "";
}