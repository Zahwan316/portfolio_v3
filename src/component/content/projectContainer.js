import React, { useState, useEffect } from 'react';
import web from '../../project';
import { game } from '../../project';
import BoxSkill from '../box/boxskill';

const ProjectContent = () => {
    const[data,setdata] = useState(web);

    const handleClickMenu = (e) => {
        const btnfor = e.target.getAttribute("btnfor");

        btnfor == "game" ?
        setdata(game)
        :
        setdata(web)
    }

    return(
        <main>
              <div className='container-fluid mt-4' style={{width:"60%",height:"80vh"}}>

                <div className='d-flex align-items-center flex-column mb-5 btn-outline-primary'>
                    <h2 className='mb-4'>Project</h2>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input 
                            type="radio" 
                            className="btn-check btn-outline-primary"
                            btnfor='web' 
                            name="btnradio" 
                            id="btnradio1"
                            autocomplete="off" 
                            checked={data === web}
                            onClick={handleClickMenu} />
                        <label className="btn btn-outline-primary" for="btnradio1">Web</label>

                        <input 
                            type="radio" 
                            className="btn-check btn-outline-primary" 
                            btnfor='game'  
                            name="btnradio" 
                            id="btnradio2" 
                            autocomplete="off" 
                            checked={data === game}
                            onClick={handleClickMenu} />
                        <label className="btn btn-outline-primary" for="btnradio2">Game</label>

                      
                    </div>
                </div>
                <div className=' d-flex flex-wrap justify-content-center' style={{minHeight:"20%",gap:"20px"}}>
                    {
                        data.map((items,index) => 
                        <BoxSkill width="40%" height="60vh" imgheight="40%" page='project' heightext="50%" main={items.text} judul={items.judul} img={items.img} tech={items.tech} github={items.link}  />
                        )
                    }
                   

                </div>
                </div>
        </main>
    )
}

export default ProjectContent;