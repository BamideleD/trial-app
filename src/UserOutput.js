import React from "react";
import styles from './UserOutput.module.css';



const UserOutput = (props) => {

    console.log(props.submitUser);
 
    const user = props.submitUser.user
    const age = props.submitUser.age

    console.log(user);
  


    return(
        <div className = {styles.overall}>

            <div>{user}</div>
            <div>{age}</div>
            
        </div>
    )
}



export default UserOutput;