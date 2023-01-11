import React from "react";
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import styles from './App.module.css';
import { useState } from "react";
import Alert from "./Alert";





const App = () => {


  const[user, setUser]= useState('')
  const[age, setAge] = useState('')

  
  const userChange = (event) => {
      setUser(event.target.value)
  }

  const ageChange = (event) => {
      setAge(event.target.value)
  }

  const eggshells = {
      user : user,
      age: age,
      key: Math.random()
  }

  const [fullUser, setFullUser] = useState([])

  const submitHandler = (event) => {
      event.preventDefault();

      if (eggshells.user.length === 0 && eggshells.age.length === 0){

        return (

              {}
          
        )
    }
    
    else setFullUser([...fullUser, eggshells])



      
  }

  const title = 'Invalid Input'
  const message = 'Please enter a valid name and age (non-empty values)'
  

   


  




  return (
    <div className= {styles.app}>
      <div className={styles.app2}>
        <Alert title = {title} message = {message}/>
      </div>
      
      <div className= {styles.app1}>
        <UserInput submitHandler = {submitHandler} user = {user} age = {age} userChange = {userChange} ageChange = {ageChange} />
        <UserOutput submitUser = {fullUser} />
      </div>
      
    </div>
    
  )
}


export default App;