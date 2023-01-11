import React from "react";
import styles from './Alert.module.css'


const Alert = (props) => {

    

    return (
        <div className={styles.backdrop}>
            <div className={styles.overall}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button> Okay </button>
                </footer>
            </div>  
        </div>
    )
}


export default Alert;