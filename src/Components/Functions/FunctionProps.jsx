
function FunctionProps(props){
    return (
        <div>
            <h1>Function Props</h1>
            <h2>Name: {props.fname} {props.lname}</h2>
            <h3>College: {props.college}</h3>
            <h3>Department: {props.dep}</h3>
            {props.children}
        </div>
    )
}

export default FunctionProps;