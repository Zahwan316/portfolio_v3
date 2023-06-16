import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NavComponent = () => {
    const navigate = useNavigate();



    const handleChangePage = (e) => {
        const link = e.target.getAttribute("link");
        navigate(`/${link}`);
    }

    return(
        <div>
          
           
         <nav class="navbar navbar-expand navbar-light bg-light d-flex justify-content-evenly border-bottom border-dark-subtle">
            <a href='' class='navbar-brand' >Skyl</a>
            <ul class="nav navbar-nav">
                 <li class="nav-item">
                     <a class="nav-link active" href="" aria-current="page" link='' onClick={handleChangePage}>Home <span class="visually-hidden">(current)</span></a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="" link='about' onClick={handleChangePage}>About</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="" link='skill' onClick={handleChangePage}>Skill</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href=""  link='project'  onClick={handleChangePage}>Project</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href=""  link='contact' onClick={handleChangePage}>Contact</a>
                 </li>
             </ul>
         </nav>
            
        </div>
    )
}

export default NavComponent;