import React, { useState, useEffect } from 'react';

const AboutContent = () => {
    return(
        <main className='mt-4'>
            <div className='mainbox container-fluid d-flex' style={{width:"60%",minHeight:"80vh"}}>
                <div className='' style={{width:"40%",height:"40%"}}>
                    <img src='/asset/img/profile.png' style={{width:"60%",height:"100%",borderRadius:"50%"}}></img>
                </div>
                <div className='w-50 p-2'>
                    <div className='aboutme mb-2'>
                        <h2 className='font1bold'>About Me</h2>
                        <p className='font1'>Welcome to my portfolio website. I'm Zahwan, a Game Developer and Web Developer from Bogor, born on September 11, 2005. Currently based in Banjar, I possess a range of skills including React and Laravel.</p>
                        <p className='font1'>With a creative and logical mindset, I found my passion in web design. I enjoy using my creativity to design and my logical thinking to code. I strive to create captivating user experiences by merging aesthetics with functionality.</p>
                    </div>
                    <div className='education mb-2'>
                        <h2 className='font1bold mb-4'>Education</h2>
                        <ul>
                            <li>
                                <h4 className='font1bold'>Smkn 1 Banjar</h4>
                                <span>2021 - Now</span>
                                <p>Software Engineering</p>
                            </li>
                        </ul>
                    </div>
                    <div className='work-exprience ' >
                        <h2 className='font1bold mb-4'>Work Exprience</h2>
                        <ul>
                            <li>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
            
    )
}

export default AboutContent;