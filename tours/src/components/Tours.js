import React from 'react'
import Tour from './Tour';

const Tours = ({tours}) => {
 return <>
<h1 className="title"> Kripu's Tours Gallery</h1>

<div className="bar"></div>
<h2 className="tours-count"> There are {tours.length} tours at the moment </h2>

{
    tours.map((value)=>{

        return <Tour key={value.id} {...value}/>

    })
}
 
 </>
}

export default Tours
