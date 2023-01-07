import React from "react";
import profileImage from './../assets/profile-icon.jpg'
import './style.css'


export default function Info(){
    return (
        <div id="info">
            <img src={profileImage} className="profile-img"/>
            <h3 className='profile-name'>Priyansi Parida</h3>
            <p className='occupation'>Frontend Developer</p>
            <p className='website'>priyansi.dev.website(placeholder)</p>
            <span className="btn-info">
                <a href="#">
                    <span className="btn-email">
                        <i className='fa fa-envelope'></i>
                        <p className="btn-email-txt">Email</p>
                    </span>
                </a>
                <a href="#" target="_blank">
                    <span className="btn-linkedin">
                        <i className="fab fa-linkedin"></i>
                        <p className="btn-linkedin-text">LinkedIn</p>
                    </span>
                </a>
            </span>
        </div>
    )
}