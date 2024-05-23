import {useState} from 'react';
export default function Ed({edExp, setEdExp}) {
   
    const [isOn, setOn] = useState(true);

    const items = edExp;

    function deleteEd(key) {
        
        const newEdExp = items.filter((item)=>item.school != key);
        setEdExp(newEdExp);

    }

    function editItem(item) {

        console.log(item);
        setOn(!isOn);
        for (let x = 0; x< edExp.length; x++)
        {
            console.log(items[x]);
            if(items[x].school === item){
                items[x].edit = !items[x].edit;
                  
            }
        }
        setEdExp(items);
       



    }

    const editItems = items.filter((item)=> item.edit!=false)
    console.log(editItems);
    const noEdit = items.filter((item)=> item.edit == false)
    console.log(noEdit);
    return (
        <> 
        <h1>Gimp</h1>
        <div>
                        {
                            items.map((item)=> {
                               
                                return ( 
                               
                                    <div key = {item.school} className = "tempEd"> 
                                        <ul>
                                            <li>School: {item.school}</li>
                                            <li>Title: {item.title}</li>
                                            <li>Grade: {item.grade}</li>
                                            <li>Start: {item.startDate} End: {item.endDate}</li>
                                        </ul>
                                    <button className="subGen" onClick = {()=> editItem(item.school)}>Edit</button>
                                    <button className = "subGen" onClick = {()=> deleteEd(item.school)}>Delete</button> 
                                    </div>  

                                   
                                )
                            })
                            
                        }
         </div>
     
             
        </>
    )
}