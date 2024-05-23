import {useState} from 'react';
import Table from './Table';
export default function Form() {

    const [genInfo, setInfo] = useState({first: '', second: '', email: '', phone: ''});

    const [isToggled, setToggle] = useState(true);

    function firstChange(e){
        setInfo({...genInfo, first: e.target.value});
    }

    function secondChange(e){
        setInfo({...genInfo, second: e.target.value});
    }
    function emailChange(e){
        setInfo({...genInfo, email: e.target.value});
    }
    function phoneChange(e){
        setInfo({...genInfo, phone: e.target.value });
    }
    function handleSubmit(e){
        e.preventDefault();
        setToggle(!isToggled);
    }

    function edit(e) {
        e.preventDefault();
        setToggle(!isToggled);
    }
     
    return (
       
     
       <>
         
        <h1>CV Builder</h1>
        <h2>General Information</h2>
       { isToggled ?
       <form className = "form" onSubmit = {handleSubmit}>
            <div className = "formItems">
                <label htmlFor = "firstName" className = "label">First Name: </label>
                <input type = "text" className = "input" id = "firstName" value = {genInfo.first} onChange = {firstChange}></input>
                <label htmlFor = "secondName" className = "label">Second Name: </label>
                <input type = "text" className = "input" id = "secondName" value = {genInfo.second} onChange = {secondChange}></input>
                <label htmlFor = "email" className = "label">Email: </label>
                <input type ="email" id = "email" className = "input" value = {genInfo.email} onChange = {emailChange} ></input>
                <label htmlFor = "phone" className = "label">Phone: </label>
                <input type = "tel" id = "phone" className = "input" value = {genInfo.phone} onChange = {phoneChange} ></input>
            </div>
            <div className="button-container">
                <button className = "subGen" >Submit</button>
            </div> 
        </form>
            
        : <div>  
        <Table first = {genInfo.first} second = {genInfo.second} email = {genInfo.email} phone = {genInfo.phone}/>
                <div className='button-container'>
                    <button onClick = {edit}>Edit</button>
                </div>
            </div>
        }
        
        </>
    )
     


}