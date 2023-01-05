import React from "react";
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import styles from './App.module.css';
import { useState } from "react";





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
      age: age
  }

  const [fullUser, setFullUser] = useState('')

  const submitHandler = (event) => {
      event.preventDefault();
      setFullUser(eggshells)
      
  }



  




  return (
    <div className= {styles.app} >
      <UserInput submitHandler = {submitHandler} user = {user} age = {age} userChange = {userChange} ageChange = {ageChange} />
      <UserOutput submitUser = {fullUser} />
    </div>
    
  )
}


export default App;