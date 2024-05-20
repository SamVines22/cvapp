import {useState} from 'react'
import '../styles/styles.css'

export function General() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function firstNameChange(e) {
        setFirstName(e.target.value);
        console.log(firstName);
    }

    function secondNameChange(e){
        setSecondName(e.target.value);
    }

    function emailChange(e){
        setEmail(e.target.value);
    }

    function phoneChange(e){
        setPhone(e.target.value);
    }

    return (<>
        <h2 className = "title">Submit your CV!</h2>
        <h4 className = "heading">General Information</h4>
        <form className = "form">
            <div className = "formItems">
                <label htmlFor = "firstName" className = "label">First Name: </label>
                <input type = "text" className = "input" id = "firstName"value = {firstName} onChange = {firstNameChange}></input>
                <label htmlFor = "secondName" className = "label">Second Name: </label>
                <input type = "text" className = "input" id = "secondName" value = {secondName} onChange = {secondNameChange}></input>
                <label htmlFor = "email" className = "label">Email: </label>
                <input type ="email" id = "email" className = "input" value = {email} onChange = {emailChange}></input>
                <label htmlFor = "phone" className = "label">Phone: </label>
                <input type = "tel" id = "phone" className = "input" value = {phone} onChange = {phoneChange}></input>
            </div>
            <div className="button-container">
                <button className = "subGen">Submit</button>
            </div>
        </form>
    
    
    
    </>)

}