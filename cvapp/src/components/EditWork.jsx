import {useState} from 'react';

export default function EditWork({...props}) {
    console.log(props);
    const oldValue = props.workExp.filter((item)=>item.id === props.editKey);
    const [newWorkExp, ChangeWorkExp] = useState({company: oldValue[0].company, title: oldValue[0].title, responsibilities: oldValue[0].responsibilities, startDate: oldValue[0].startDate, endDate: oldValue[0].endDate, id: oldValue[0].id })
    let copy = props.workExp;
    function editCompany(e) {
        ChangeWorkExp({...newWorkExp, company : e.target.value})
    }

    function editTitle(e) {
        ChangeWorkExp({...newWorkExp, title : e.target.value})
    }

    function editResponsibilities(e) {
        ChangeWorkExp({...newWorkExp, responsibilities : e.target.value})
    }

    function editStart(e) {
        ChangeWorkExp({...newWorkExp, startDate : e.target.value})
    }
    
    function editEnd(e) {
        ChangeWorkExp({...newWorkExp, endDate : e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(copy);
        for (let x = 0; x< copy.length; x++)
        {
            if (copy[x].id === oldValue[0].id)
            {
                copy[x].company = newWorkExp.company;
                copy[x].title = newWorkExp.title;
                copy[x].responsibilities = newWorkExp.responsibilities;
                copy[x].startDate = newWorkExp.startDate;
                copy[x].endDate = newWorkExp.endDate;
            }
        }
        console.log(copy);
        props.setWorkExp(copy);
        props.setEdit(!props.edit);
        
    }



    return (<>
    <h1>Edit Work</h1>
    {
        oldValue.map((item)=> {
            return ( <div key = {item.id}>
                        
                        <form className="form" onSubmit={handleSubmit} >
                        <div className = "formItems">
                            <label htmlFor="company" className = "label"  >Company</label>
                            <input type = "text" id = "school" className = "input" value = {newWorkExp.company} onChange = {editCompany} ></input>
                            <label htmlFor = "title" className = "label" >Job Title</label>
                            <input type = "text" id = "title" className = "input" value = {newWorkExp.title} onChange = {editTitle}></input>
                            <label htmlFor = "responsibilites" className = "label" >Responsibilities</label>
                            <input type = "text" id = "responsibilities" className = "input" value = {newWorkExp.responsibilities} onChange = {editResponsibilities}></input>
                            <div className="dates">
                                <label htmlFor ="startDate" className = "label">Start date</label>
                                <input type = "date" id = "startDate" className = "input"  value = {newWorkExp.startDate} onChange = {editStart} ></input>
                                <label htmlFor ="endDate" className = "label">End date</label>
                                <input type = "date" id = "endDate" className = "input" value = {newWorkExp.endDate} onChange = {editEnd}></input>
                            </div>
                            

                        </div>
                        <div className='button-container'>
                            <button>Submit</button>
                        </div>
                        </form>



            </div>

            )
        })
    }
    
    </>)
}