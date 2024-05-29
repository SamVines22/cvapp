import Edit from './Edit';
import { useState } from 'react';

export default function Ed({...props}) {
   
   // const [editOn, setEdit] = useState(false); 
    const [editKey, setEditKey] = useState('');
   // const [nonEdit, setNonEdit] = useState([]);
    
  
    const items = props.edExp;

    function deleteEd(key) {
        
        const newEdExp = items.filter((item)=>item.id != key);
        props.setEdExp(newEdExp);

    }

    function editItem(id) {
        setEditKey(id);
       props.setEdit(!props.editOn);
     
    
    }

  
    return (
        <> 
       
        <div>            
                         {props.editOn && 
                        <Edit  edExp = {props.edExp} editKey = {editKey} setEdExp = {props.setEdExp} editOn = {props.editOn} setEdit = {props.setEdit}/>     }     
                                
                        {   !props.editOn && 
                            items.map((item)=> {
                               
                                return ( 
                               
                                    <div key = {item.id} className = "tempEd"> 
                                        <ul>
                                            <li>School: {item.school}</li>
                                            <li>Title: {item.title}</li>
                                            <li>Grade: {item.grade}</li>
                                            <li>Start: {item.startDate} End: {item.endDate}</li>
                                        </ul>
                                <button className="subGen" onClick = {()=> editItem(item.id)}>Edit</button>
                            <button className = "subGen" onClick = {()=> deleteEd(item.id)}>Delete</button>  
                                    </div>  

                                   
                                )
                            })
                            
                        }
         </div>
     
             
        </>
    )
}