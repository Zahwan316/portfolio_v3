import React, { useState, useEffect } from 'react';
import "../../css/style.css";

const HomeContent = () => {
    return(
        <main class='d-flex justify-content-center md:px-2'>
            <div className='container d-flex sm:flex-column row' style={{width:"60%",height:"80vh"}} >
                <div className='left w-50 h-100  d-flex align-items-center p-2 col-sm-6'>
                    <img src='asset/img/video-game.png' className='mr-2' style={{height:"50%",width:"90%"}}></img>
                </div>
                <div className='d-flex justify-content-center flex-column ml-2 w-50 px-2 col-sm-6'>
                    <h2 className='font1bold' >Hi! Im</h2>
                    <h3 className='font1bold'>Muhammad Zahwan Sidqi</h3>
                    <p className='font1'>Backend & Game Developer</p>
                    <button class='btn btn-outline-primary'>Download Resume</button>
                </div>
            </div>
        </main>
    )
}

export default HomeContent;