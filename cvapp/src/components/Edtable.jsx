

export default function Edtable(props) {
    console.log(props);
  
    const data = props.data;
    console.log(data);

    
    return (
        <div className = "edInfo">
           
                 
                { 
                    data.map((item)=>{
                  return (
               
                               <div key = {item.id}>  
                                 <ul>
                            <li>School: {item.school}</li>
                            <li>Title: {item.title}</li>
                            <li>Grade: {item.grade}</li>
                            <li>Start: {item.startDate}</li>
                            <li>End: {item.endDate}</li>
                            </ul>
                            
                   
         

                        
                        
                      </div>
                          )
                    }) }
                
            
             
            
            
            
        </div>
    )


}