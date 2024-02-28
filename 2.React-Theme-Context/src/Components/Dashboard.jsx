import React from 'react'
import user from "../db.json"
import { ThemeContext } from '../Context/ThemeContextProvider'
import User from './User'


export const Dashboard = () => {
    // console.log(postsData)
    const {setIsDarkTheme,isDarkTheme} = React.useContext(ThemeContext)
    // console.log(values) 
    function handleChange(e){
        const optionValue = e.target.value
        if(optionValue==="light"){
            setIsDarkTheme(false)
        } else if(optionValue==="dark"){
            setIsDarkTheme(true)
        }
    }
    return (
        <div data-testid = "dashboard-cont" style={isDarkTheme?({backgroundColor:"black"}):({backgroundColor:"white"})} >
            <select data-testid = "select-theme" onChange={handleChange}>
                <option value="light" >Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            {user?.map(user=><User isDarkTheme={isDarkTheme} user={user} key={user.id} />)}
            
        </div>
)
}
