import React, { useState, useEffect } from 'react';

const BoxSkill = (props) => {
    const[tech,settech] = useState(props.tech);

    const handleLinkGithub = (link) => {
        document.location.href = link
    }

    useEffect(() => {
        console.log(tech)
    })

    return(
        <div class='card border border-dark p-3 card-hover' style={{width:props.width,height:props.height}}>
            <div className='w-100 mb-2' style={{height:props.imgheight}}>
                <img src={props.img} style={{width:"100%",height:"100%"}}></img>
            </div>
            <div className={`w-100 d-flex justify-content-center ${props.page == "skill" && "align-items-center"}`} style={{height:props.heightext}}>
                <p className='text-center'>{props.text}</p>
                {
                    props.page == "project" &&
                    <div className='w-100 d-flex flex-column '>
                        <div className='d-flex justify-content-between'>
                            <h4>{props.judul}</h4>
                            <div className="d-flex align-items-center" style={{}}>
                                <i className="fa-solid fa-code mx-3" onClick={() => handleLinkGithub(props.github)}></i>
                                <i className="fa-solid fa-up-right-from-square"></i>
                            </div>
                        </div>
                        <div  style={{height:"60%"}}>
                            <p className='text-secondary'>{props.main}</p>

                        </div>
                        <div className='w-100 d-flex algin-items-end' style={{height:"20%"}}>
                            {
                                tech.map((items,index) => 
                                <img src={items} className="mx-2" width="15%" height="80%"></img>
                                
                                )
                            }
                        </div>
                    </div>
                } 

            </div>
        </div>
    )
}

export default BoxSkill;