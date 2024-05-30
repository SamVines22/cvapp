export default function Table(props) {
    console.log(props);
    const first = props.first;
    const second = props.second;
    const email = props.email;
    const phone = props.phone;

    return (
        <div className = "generalInfo">
        
        <h3>First Name: {first}</h3>
        <h3>Second Name: {second}</h3>
        <h3>Email: {email}</h3>
        <h3>Tel: {phone}</h3>
        </div>
    )



} 