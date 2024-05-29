export default function Edtable(props) {
    console.log(props);
    const data = props.data;
    console.log(data);
    return (
        <div className = "edInfo">
            <h2>Education Experience</h2>
          
                <ul>
                { 
                    data.map((item)=>{
                        return (
                               <div key = {item.id}>  
                            <li>School: {item.school}</li>
                            <li>Title: {item.title}</li>
                            <li>Grade: {item.grade}</li>
                            <li>Start: {item.startDate}</li>
                            <li>End: {item.endDate}</li>
                            </div>
                        )
                    })
                }
                </ul>
            
            
            
        </div>
    )


}