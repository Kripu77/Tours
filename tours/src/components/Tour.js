import React from 'react'

const Tour = ({id, image, info, name, price, removedTour}) => {

    return <article><div className="main-card">
        <img src={image} alt={name}/>
    
        <div className="details"> 
               <h1> {name}</h1> 
               <h1 className="price">${price}</h1>
        </div>
        <p>{info}</p>
         <button className="delete-btn" onClick={()=>removedTour(id)}> Not Intrested</button>
        </div>
       
    </article>
    
 
   
}

export default Tour
