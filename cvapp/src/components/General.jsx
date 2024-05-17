import {useState} from 'react'
import '../styles/styles.css'

export function General() {

    return (<>
        <h2 className = "title">Submit your CV!</h2>
        <h4 className = "heading">General Information</h4>
        <form className = "form">
            <label htmlFor = "firstName">First Name: </label>
            <input type = "text" className = "input" id = "firstName"></input>
            <label htmlFor = "secondName">Second Name: </label>
            <input type = "text" className = "input" id = "secondName"></input>
            <label htmlFor = "email">Email: </label>
            <input type ="email" id = "email"></input>
            <label htmlFor = "phone">Phone: </label>
            <input type = "tel" id = "phone"></input>
        </form>
    
    
    
    </>)

}