import Header1 from "./Components/Header1";
import './App.css';
import Movie from "./Components/Movie";
import movies from './Movies.json'
function App1()
{
    return(
        <div className="App1">
<Header1 />
<div className="main">
{movies.map((element)=>{
return(
    <Movie title={element.Title}
        year={element.Year}
        img={element.Poster}
        
         />
);
}
)}

</div>





        </div>
    )
}
export default App1;