import React, {useState, useEffect} from 'react'
import Loading from './components/Loading';
import Error from './components/Error';
import "./css/index.css"

import Tours from './components/Tours';
// our API
const url = 'https://course-api.com/react-tours-project'
const App = () => {
const[isLoading, setIsLoading] = useState(true);
const[isError, setIsError] = useState(false);
// initial state
const[tours, setTours] = useState([]); 

//When the document is loading
if(isLoading){
    return <Loading/>
}
//when there is error
if(isError){
    return <Error/>
}



}

export default App
