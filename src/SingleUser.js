import React from "react";
import { useState } from "react";
import styles from './SingleUser.module.css';




const SingleUser = (props) => {


    const [visible, setVisible] = useState(true);
 
    
    const deleteHandler = () => {
        setVisible (false)
    }
    
    if (visible === true) {

    return(
        <div className={styles.output} onClick = {deleteHandler}>
            <div className = {styles.user}>{props.data.user}</div>
            <div>({props.data.age} years old)</div>
        </div>
    )

    }
    
}


export default SingleUser;