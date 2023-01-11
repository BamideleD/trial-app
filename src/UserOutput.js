import React from "react";
import styles from './UserOutput.module.css';
import SingleUser from "./SingleUser";



const UserOutput = (props) => {


    return(
        <div className = {styles.overall}>

        {props.submitUser.map((data) => {
            return (
                    <SingleUser data = {data} key = {data.key}/>
            )
        }
        )}
            
        </div>
    )
}



export default UserOutput;