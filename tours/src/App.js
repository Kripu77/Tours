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
//while the status is loading
    if(isLoading){
        return <Loading/>
    }

//while there is any error
if(isError){
    return <Error/>
}
 return <>
 <h1> I am fine</h1>
 </>
}

export default App
