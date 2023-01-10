import React from "react";
import styles from './UserOutput.module.css';
import { useState } from "react";
import SingleUser from "./SingleUser";



const UserOutput = (props) => {

    console.log(props.submitUser);

   
    
  


    return(
        <div className = {styles.overall}>

        {props.submitUser.map((data) => {
            return (
                    <SingleUser data = {data}/>
            )
        }
        )}
            
        </div>
    )
}



export default UserOutput;