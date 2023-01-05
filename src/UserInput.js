import React from "react";
import styles from './UserInput.module.css';
import { useState } from "react";




const UserInput = () => {
    const[user, setUser]= useState('')
    const[age, setAge] = useState('')

    
    const userChange = (event) => {
        setUser(event.target.value)
    }

    const ageChange = (event) => {
        setAge(event.target.value)
    }


    const submitHandler = (event) => {

        event.preventDefault();
    

    }



    return (
        <div className = {styles.overall} >
            <form onSubmit={submitHandler} className= {styles.form}>
                <label> Username  </label>
                <input type = 'text' value={user} onChange = {userChange} />
                <label> Age (Years)  </label>
                <input type = 'number' value={age} onChange = {ageChange} />
                <button type = 'submit'> Add User </button>
            </form>
        </div>
    )

}



export default UserInput;