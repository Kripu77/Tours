import React from 'react'

const Tour = ({id, image, info, price, name, removedList}) => {

    return <>
    
<article className="main-card" >

    <img src={image} alt={name}/>
   <footer>
    <div className="details">
<h2> {name}</h2>
 <h2 className="price"> ${price}</h2>

    </div>
    <p>{info}</p>
    <button className="delete-btn" onClick={()=>{removedList(id)}}> Not Interested</button>

</footer>
</article>
    </>
 
   
}

export default Tour
