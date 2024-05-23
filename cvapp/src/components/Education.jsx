import {useState} from 'react';
import Edtable from './Edtable';
import Ed from './Ed';


export default function Education() {
    const [isToggled, setToggle] = useState(true);
    const [edInfo, setEdInfo] = useState({school : '', title: '', grade: '', startDate: '', endDate: '', edit : false});
    const [edExp, setEdExp] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(edInfo);
        
        setToggle(!isToggled);
        
    }

    function addExp(e) {
        e.preventDefault();
        setEdExp([...edExp,edInfo]);
        setEdInfo({school: '', title: '', grade: '', startDate: '', endDate: '', edit: false});

    }

    function schoolChange(e) {
        setEdInfo({...edInfo, school: e.target.value});
    }

    function titleChange(e){
        setEdInfo({...edInfo, title: e.target.value});
    }
    
    function gradeChange(e){
        setEdInfo({...edInfo, grade: e.target.value});
    }
    function startDateChange(e){
        setEdInfo({...edInfo, startDate: e.target.value});
    }

    function endDateChange(e){
        setEdInfo({...edInfo, endDate: e.target.value});
    }


    return (
        <div className = "education">
            <h2>Education </h2>
            {
                isToggled ?  

                 <div> 
                    <Ed edExp = {edExp} setEdExp = {setEdExp}/>
                    
                    <form className = "form" onSubmit = {handleSubmit}>
                        <div className = "formItems">
                            <label htmlFor="school" className = "label" >School</label>
                            <input type = "text" id = "school" className = "input" onChange = {schoolChange} value = {edInfo.school}></input>
                            <label htmlFor = "title" className = "label" >Title of Study</label>
                            <input type = "text" id = "title" className = "input" onChange = {titleChange} value = {edInfo.title}></input>
                            <label htmlFor = "grade" className = "label" >Grade achieved</label>
                            <input type = "text" id = "grade" className = "input" onChange = {gradeChange} value = {edInfo.grade}></input>
                            <div className="dates">
                                <label htmlFor ="startDate" className = "label">Start date</label>
                                <input type = "date" id = "startDate" className = "input" onChange = {startDateChange} value = {edInfo.startDate}></input>
                                <label htmlFor ="endDate" className = "label">End date</label>
                                <input type = "date" id = "endDate" className = "input" onChange = {endDateChange} value = {edInfo.endDate}></input>
                            </div>

                        </div>
                        <div className="button-container">
                            <button className = "subGen" onClick = {addExp}>Add</button>
                            <button className = "subGen" >Submit</button>
                        </div> 

                    </form>
                   

                </div>: 
                    
                        <Edtable data = {edExp} />
                   
            }



        </div>
    )


}