import React from "react";
import styles from './UserOutput.module.css';



const UserOutput = (props) => {

    console.log(props.submitUser);
 
    

    
  


    return(
        <div className = {styles.overall}>

        {props.submitUser.map((data) => {
            return (
                <div>
                    <div>{data.user}</div>
                    <div>{data.age}</div>
                </div>
            )
        }
        )}
            
        </div>
    )
}



export default UserOutput;