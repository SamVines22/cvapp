

export default function WorkExpCom({...props}) {
    let exp = props.workExp;
    let setWorkExp = props.setWorkExp;

   
    

    function deleteWork(id) {
        let newWorkExp = exp.filter((item)=>item.id!=id)
        setWorkExp(newWorkExp);

    }

    function editWork(id) {
        console.log(id)
        props.setEditKey(id);
        props.handleEdit(!props.edit);
    }

    
    return (<>
            { 
                exp.map((item)=>{
                    return (
                        <div key = {item.id}>
                            <ul>
                                <li>Company: {item.company}</li>
                                <li>Job Title: {item.title}</li>
                                <li>Responsibilities: {item.responsibilities}</li>
                                <li>Start: {item.startDate} End: {item.endDate}</li>
                            
                            </ul>
                               <button onClick={()=>deleteWork(item.id)}>Delete</button> 
                               <button onClick = {()=> editWork(item.id)}>Edit</button>
                        </div>
                        
                    )
                })
             }
            </>
    )
}