import React, {useState} from 'react'

const Loading = () => {

    const[isLoading, setIsLoading] = useState(true);
    return <>
    {isLoading ? <h1> Loading.....</h1> : setIsLoading(false)}
    </>
}

export default Loading
