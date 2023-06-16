import React, { useState, useEffect } from 'react';
import BoxSkill from '../box/boxskill';
import languageskill from "../../skill";
import { framework,library,dbms } from '../../skill';


const SkillContent = () => {
    const[language,setlanguage] = useState(true);
    const[data,setdata] = useState(languageskill)

    useEffect(() => {
        console.log(languageskill)
    });

    const handleClickMenu = (e) => {
        const btnFor = e.target.getAttribute("btnfor");

        console.log(btnFor)

        if( btnFor == "languageskill"){
            setdata(languageskill)
        }
        else if( btnFor == "framework"){
            setdata(framework)
        }
        else if( btnFor == "library" ){
            setdata(library)
        }
        else if(btnFor == "dbms"  ){
            setdata(dbms)
        }
        else{
            setdata(languageskill)
        }

    }



    return(
        <main>
            <div className='container-fluid mt-4' style={{width:"60%",height:"80vh"}}>

                <div className='d-flex align-items-center flex-column mb-5'>
                <h2>Skill</h2>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" btnfor='languageskill' name="btnradio" id="btnradio1" autocomplete="off" checked onClick={handleClickMenu} />
                        <label className="btn btn-outline-dark" for="btnradio1">Language</label>

                        <input type="radio" className="btn-check" btnfor='framework' name="btnradio" id="btnradio2" autocomplete="off" onClick={handleClickMenu} />
                        <label className="btn btn-outline-dark" for="btnradio2">Framework</label>

                        <input type="radio" className="btn-check" btnfor='library' name="btnradio" id="btnradio3" autocomplete="off" onClick={handleClickMenu} />
                        <label className="btn btn-outline-dark" for="btnradio3">Library</label>

                        <input type="radio" className="btn-check" btnfor='dbms' name="btnradio" id="btnradio4" autocomplete="off" onClick={handleClickMenu} />
                        <label className="btn btn-outline-dark" for="btnradio4">DBMS</label>
                    </div>
                </div>
                <div className=' d-flex flex-wrap justify-content-center' style={{minHeight:"20%",gap:"20px"}}>
                   
                    {
                        data.map((items,index) => 
                            <BoxSkill img={items.img} text={items.text} width="20%" height="25vh" imgheight="80%" />
                        )
                    }

                </div>
            </div>
        </main>
    )
}

export default SkillContent