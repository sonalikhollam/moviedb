import Comp from "./Comp";
import propTypes  from "prop-types";

function Header(props)
//function Header({name,age}) 2nd way to access props 
//<h1>{name}</h1>
//<h1>{age}</h1>

{
    return(
        <>
        
        <h2>hello</h2>
        <h1>{props.name}</h1>
     
        <h1>{props.age}</h1>
        <Comp name={props.name} />
        


        </>
   
   
    )

}

Header.propTypes={
    name:propTypes.string,
    age:propTypes.number
}

export default Header;