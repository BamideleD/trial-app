import React, { useRef } from "react";
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import styles from './App.module.css';
import { useState } from "react";
import Alert from "./Alert";





const App = () => {


 const nameInputRef = useRef();
 const ageInputRef = useRef();

 
  
  const[error, setError] = useState()

  


  const [fullUser, setFullUser] = useState([])

  const submitHandler = (event) => {
      event.preventDefault();
      const user = nameInputRef.current.value
      const age = ageInputRef.current.value

      
    const eggshells = {
      user : user,
      age: age,
      key: Math.random()
  }

      if (eggshells.user.length === 0 && eggshells.age.length === 0){

        return (

              setError({
                title: 'Invalid Input',
                message : 'Please enter a valid name and age (non-empty values)'
              })
          
        )
    }

    if (eggshells.age < 1){

      return (
        setError({
          title: 'Invalid Age',
          message : 'Please enter a valid age (> 0)'
        })
      )
    }
    
    else setFullUser([...fullUser, eggshells])

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';



      
  }

  const closePortal = () => {
    setError (null)
  }


  

   


  




  return (
    <React.Fragment>
        {error && <Alert closePortal = {closePortal} title = {error.title} message = {error.message}/>}
      <div className= {styles.app1}>
        <UserInput submitHandler = {submitHandler}  nameInputRef = {nameInputRef} ageInputRef = {ageInputRef} />
        <UserOutput submitUser = {fullUser} />
      </div>
      
    </React.Fragment>
    
  )
}


export default App;