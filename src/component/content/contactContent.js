import React, { useState, useEffect } from 'react';
import axios from "axios"
import Swal from "sweetalert2"

const socialmedia = [
    {
        "img":"asset/img/github.png",
        "link":"https://github.com/Zahwan316",
        "name":"github"
    },
    {
        "img":"asset/img/instagram.jpg",
        "link":"https://instagram.com/skyl_36",
        "name":"instagram"
    },
    {
        "img":"asset/img/linkedin.png",
        "link":"https://www.linkedin.com/in/muhammad-zahwan-sidqi-98616327a/",
         "name":"linkedin"
    },
    {
        "img":"asset/img/facebook.png",
        "link":"https://www.facebook.com/zahwan.sidqi",
        "name":"facebook"
    },
    
]

const ContactContent = () => {
    const [sosmed,setsosmed] = useState(socialmedia);
    const[forminput,setforminput] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleFormInput = (e) => {
        setforminput({...forminput,[e.target.name]:e.target.value})
    }

    const handleClickLink = (link) => {
        window.open(link,"_blank")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const sendData = async() => {
            try{
                let response = await axios.post(`${process.env.REACT_APP_API_LINK}email_send`,forminput)
                console.log(response.data)
                Swal.fire(
                    'Data Terkirim',
                    'Pesan sudah terkirim',
                    'success'
                  )
            }
            catch(e){
                console.log(e)
                Swal.fire(
                    'Pesan Tidak Terkirim!',
                    'Ada kesalahan di dalam server',
                    'error'
                  )
            }
        }
        sendData()
    }

    useEffect(() => {
        console.log(forminput)
    })

    return(
        <main className='mt-4' >
            <div className='container-fluid d-flex flex-column' style={{width:"50%",height:"80vh"}}>
                <h2 className='mb-4'>Contact</h2>
                <div className='maincontact w-100'>
                    <form onSubmit={handleSubmit}>
                        <ul className='p-1'>
                            <li className='list-unstyled mb-3'>
                                <label className='mb-2'>Name</label>
                                <input 
                                    type='text'
                                    onChange={handleFormInput} 
                                    className='form-control' 
                                    name='name' />
                            </li>
                            <li className='list-unstyled mb-3'>
                                <label className='mb-2'>Email</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    onChange={handleFormInput}
                                    name='email' />
                            </li>
                            <li className='list-unstyled mb-3'>
                                <label className='mb-2'>Message</label>
                                <textarea 
                                    className='form-control' 
                                    name='message' 
                                    onChange={handleFormInput}
                                    style={{resize:"none",height:"10vw"}}
                                >

                                </textarea>
                            </li>
                            <li className='list-unstyled mb-3'>
                                <input type='submit' value='Send' className='btn btn-primary' />
                            </li>
                        </ul>
                    </form>
                </div>
                <div className='w-100 container-fluid d-flex' style={{height:"6vh"}}>
                    {
                        sosmed.map((items,index) =>
                            <div className='h-100 mx-3' style={{width:"6%",cursor:"pointer"}} >
                                <img src={items.img} style={{width:"100%",height:"100%"}} onClick={() => handleClickLink(items.link)}></img>
                            </div>
                        )
                    }
                   
                </div>
            </div>
        </main>
    )
}

export default ContactContent;