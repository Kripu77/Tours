import React, {useState, useEffect} from 'react'
import Loading from './components/Loading';
import Error from './components/Error';
import "./css/index.css"

import Tours from './components/Tours';
import Tour from './components/Tour';
// our API
const url = 'https://course-api.com/react-tours-project'
const App = () => {
const[isLoading, setIsLoading] = useState(true);
const[isError, setIsError] = useState(false);
// initial state
const[tours, setTours] = useState([]);
console.log(tours); 

//for filter function
 const removedTour = (id)=>{
setTours(tours.filter((tour)=>{
return tour.id != id;
}))
 }

const fetchData = ()=>{
    // fetch the data using fetch request
    fetch(url) .then(
        (res)=>{
            // when response is valid no 404 request
            if(res.status>200 || res.status <299){
                return res.json();
            }
            // if 404 return this error
            else{
                setIsError(true);
                setIsLoading(false);
            }
        }

    )
    // the setting the data array to the tours using the method
    .then((data)=>{
setTours(data);
setIsLoading(false);

    })
}
// setting fetch inside useeeffect
useEffect(()=>{
    fetchData();
},[])

//When the document is loading
if(isLoading){
    return <Loading/>
}
//when there is error
if(isError){
    return <Error/>
}


//when none of the cpondition are met and the fetch has been successful
return <>
{/* we can pass the tours as our props */}
<Tours tours={tours} removedTour={removedTour} fetchData={fetchData}/>
</>


}

export default App
