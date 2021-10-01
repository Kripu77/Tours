import React from 'react'
import Tour from './Tour';

const Tours = ({tours, removedList}) => {
 return <>
<h1 className="title"> Kripu's Tours Gallery</h1>

<div className="bar"></div>
<h2 className="tours-count"> {tours.length>0 ? <h2> There are {tours.length} tour options avaliable</h2> : <h2> Please visit back later there are no tour option available</h2>}</h2>

{
    tours.map((value)=>{

        return <Tour key={value.id} {...value} removedList={removedList}/>

    })
}
 
 </>
}

export default Tours
