import {useState} from 'react';
export default function Edit({...props}) {
    const oldValue = props.edExp.filter((item)=>item.id === props.editKey);
    let copy = props.edExp;

    const [newEdExp, changeEdExp] = useState({school : oldValue[0].school, title: oldValue[0].title, grade: oldValue[0].grade, startDate: oldValue[0].startDate, endDate: oldValue[0].endDate, id: oldValue[0].id});
   
    



    function editSchool(e) {
        changeEdExp({...newEdExp, school: e.target.value});
        }
    function editTitle(e) {
        changeEdExp({...newEdExp, title: e.target.value});
        }
    function editGrade(e) {
        changeEdExp({...newEdExp, grade: e.target.value});
    }
    function editStart(e) {
        changeEdExp({...newEdExp, startDate: e.target.value});
    }
    function editEnd(e) {
        changeEdExp({...newEdExp, endDate: e.target.value});
    }
    function handleEditSubmit(e) {
        e.preventDefault();
        for (let x = 0; x<props.edExp.length; x++)
        {
            if (copy[x].id === oldValue[0].id )
            {
                copy[x].school = newEdExp.school;
                copy[x].title = newEdExp.title;
                copy[x].grade = newEdExp.grade;
                copy[x].startDate = newEdExp.startDate;
                copy[x].endDate = newEdExp.endDate;
            }
        }
        console.log(copy);
        props.setEdExp(copy);
        props.setEdit(!props.editOn);
    }



  
   return (<>
   <h2>bugger</h2>
   <form className = "form" onSubmit = {handleEditSubmit}>
                        <div className = "formItems">
                            <label htmlFor="school" className = "label" >School</label>
                            <input type = "text" id = "school" className = "input" onChange = {editSchool} value = {newEdExp.school}></input>
                            <label htmlFor = "title" className = "label" >Title of Study</label>
                            <input type = "text" id = "title" className = "input" onChange = {editTitle} value = {newEdExp.title}></input>
                            <label htmlFor = "grade" className = "label" >Grade achieved</label>
                            <input type = "text" id = "grade" className = "input" onChange = {editGrade} value = {newEdExp.grade}></input>
                            <div className="dates">
                                <label htmlFor ="startDate" className = "label">Start date</label>
                                <input type = "date" id = "startDate" className = "input" onChange = {editStart} value = {newEdExp.startDate}></input>
                                <label htmlFor ="endDate" className = "label">End date</label>
                                <input type = "date" id = "endDate" className = "input" onChange = {editEnd} value = {newEdExp.endDate}></input>
                            </div>

                        </div>
                        <div className="button-container">
                            <button>Submit</button>
                        </div>
                        </form>
   </>)
}