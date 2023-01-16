import React from "react";
import styles from './UserInput.module.css';





const UserInput = (props) => {
  


    



    return (
        <div className = {styles.overall} >
            <form  className= {styles.form}>
                <label> Username </label>
                <input type = 'text' ref = {props.nameInputRef}/>
                <label> Age (Years)  </label>
                <input type = 'number' ref = {props.ageInputRef} />
                <button type = 'submit' onClick={props.submitHandler}> Add User </button>
            </form>
        </div>
    )

}



export default UserInput;