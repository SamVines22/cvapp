import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkExpCom from './WorkExp';
import Worktable from './Worktable';
import EditWork from './EditWork';


export default function WorkExperience() {

    const [isToggled, setToggle] = useState(true);
    const [workInfo, setWorkInfo] = useState({company: '', title: '', responsibilities: '', startDate: '', endDate: '', id: uuidv4() });
    const [workExp, setWorkExp] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editKey, setEditKey] = useState('');
    
    function compChange(e){
      
        setWorkInfo({...workInfo, company: e.target.value });
    }

    function titleChange(e){
        
        setWorkInfo({...workInfo, title: e.target.value});
    }

    function responsibilitiesChange(e){
       
        setWorkInfo({...workInfo, responsibilities: e.target.value});
    }

    function startDateChange(e){
        
        setWorkInfo({...workInfo, startDate: e.target.value});
    }

    function endDateChange(e){
        
        setWorkInfo({...workInfo, endDate: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(workInfo);
        setToggle(false);
    }

    function addWorkExp(e){
        e.preventDefault();
        setWorkExp([...workExp, workInfo]);
        setWorkInfo({company: '', title: '', responsibilities: '', startDate: '', endDate: '', id: uuidv4()});
    }

    function handleEdit() {
        setEdit(!edit);
     
    }

    return (
        <>
        <h2>Work experience</h2>
           { 
               isToggled?
               <div>
        
               {!edit && <WorkExpCom workExp = {workExp} setWorkExp = {setWorkExp} edit = {edit} handleEdit = {handleEdit} editKey = {editKey} setEditKey = {setEditKey}/> }
                {edit && <EditWork workExp = {workExp} setWorkExp = {setWorkExp} editKey = {editKey} edit = {edit} setEdit = {setEdit}/>}
                { !edit &&   <form className="form" onSubmit={handleSubmit}>
                    <div className = "formItems">
                            <label htmlFor="company" className = "label" >Company</label>
                            <input type = "text" id = "school" className = "input" onChange = {compChange} value = {workInfo.company}></input>
                            <label htmlFor = "title" className = "label" >Job Title</label>
                            <input type = "text" id = "title" className = "input" onChange = {titleChange} value = {workInfo.title}></input>
                            <label htmlFor = "responsibilites" className = "label" >Responsibilities</label>
                            <input type = "text" id = "responsibilities" className = "input" onChange = {responsibilitiesChange} value = {workInfo.responsibilities}></input>
                            <div className="dates">
                                <label htmlFor ="startDate" className = "label">Start date</label>
                                <input type = "date" id = "startDate" className = "input" onChange = {startDateChange} value = {workInfo.startDate}></input>
                                <label htmlFor ="endDate" className = "label">End date</label>
                                <input type = "date" id = "endDate" className = "input" onChange = {endDateChange} value = {workInfo.endDate}></input>
                            </div>
                            

                        </div>
                        <div className="button-container">
                            <button className = "subGen" onClick = {addWorkExp}>Add</button>
                            <button className = "subGen" >Submit</button>
                        </div> 

                    </form> }
                </div> 
                 :  <>{  !edit && <div>  <Worktable data = {workExp}/ > </div>
                   } </>
                   
                 
        
           
    
            }
        </>
    )

}