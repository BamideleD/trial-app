import React from "react";
import styles from "./Modal.module.css"

const Modal = (props) => {
    return (
        <div className={styles.overall}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button onClick={props.closePortal}> Okay </button>
                </footer>
            </div>
    )
}


export default Modal;