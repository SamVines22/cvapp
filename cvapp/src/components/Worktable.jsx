export default function Edtable(props) {
 
    const data = props.data;
  
    return (
        <div className = "edInfo">
        
          
               
                { 
                    data.map((item)=>{
                        return (
                                 
                            <div key = {item.company}>
                                 <ul>
                                <li>Company: {item.company}</li>
                                <li>Job Title: {item.title}</li>
                                <li>Responsibilities: {item.responsibilities}</li>
                                <li>Start Date: {item.startDate}</li>
                                <li>End Date: {item.endDate}</li>
                                </ul>
                            </div>
                    
                        )
                    })
                }
               
            
            
            
        </div>
    )


}