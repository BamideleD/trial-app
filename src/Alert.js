import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./Modal"

const Alert = (props) => {


    const closePortal = props.closePortal
    const title = props.title
    const message = props.message
    

    return ( 
        <React.Fragment>
            {ReactDOM.createPortal(
               <Backdrop closePortal = {closePortal} />,
               document.getElementById("backdrop-root") 
            )}
            {ReactDOM.createPortal(
               <Modal closePortal = {closePortal} title = {title} message = {message} />,
               document.getElementById("modal-root") 
            )}   
        </React.Fragment>
    )
}


export default Alert;