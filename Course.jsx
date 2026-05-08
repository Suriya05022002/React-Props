
function Course(props)
{

    return(
        
        <div className="card">
        <img src={props.img}/>
    <h2>{props.name}</h2>
    <h2>{props.price}</h2>
    
    <h2>{props.rating}</h2>
        </div>
    )
}
export default Course