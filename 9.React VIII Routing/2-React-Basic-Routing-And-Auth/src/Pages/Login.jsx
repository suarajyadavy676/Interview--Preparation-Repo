import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const {setIsAuth} = React.useContext(AuthContext)
    const navigate = useNavigate()
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    const fetchKey = async(e)=>{
        e.preventDefault()
        try { 
            const res = await fetch(` https://reqres.in/api/login`,{
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                },
                body:JSON.stringify({email,password})
            })
            if(res.ok){
                setIsAuth(true)
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className = "auth_form" onSubmit={fetchKey}  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}