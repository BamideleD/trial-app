import React from "react";
import styles from './UserInput.module.css';





const UserInput = (props) => {
  


    



    return (
        <div className = {styles.overall} >
            <form onSubmit={props.submitHandler} className= {styles.form}>
                <label> Username </label>
                <input type = 'text' value={props.user} onChange = {props.userChange} />
                <label> Age (Years)  </label>
                <input type = 'number' value={props.age} onChange = {props.ageChange} />
                <button type = 'submit'> Add User </button>
            </form>
        </div>
    )

}



export default UserInput;