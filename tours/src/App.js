import React, {useState, useEffect} from 'react'
import Loading from './components/Loading';
import Error from './components/Error';
import "./css/index.css"

import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project'
const App = () => {
    const[isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] =useState(false);
    const[tours, setTours]=  useState([])

    //fetching the data in useEffect

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(res.status>200 || res.status<299){
                return res.json();
            }
            else{
                setIsError(true);
                setIsLoading(false);
            }
        })
        .then((data)=>{
            setTours(data);
            setIsLoading(false);

        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false);
            setIsError(true);
        })
    },[])
//while the status is loading
    if(isLoading){
        return <Loading/>
    }

//while there is any error
if(isError){
    return <Error/>
}
 return <>
<Tours tours={tours}/>
 <button className="clear-btn" onClick={()=>{setTours([])}}> Clear all</button>
 </>

}

export default App
