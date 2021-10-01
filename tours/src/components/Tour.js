import React,{useState} from 'react'

const Tour = ({id, image, info, name, price, removedTour}) => {
const[readMore, setReadMore] = useState(false);
    return <article><div className="main-card">
        <img src={image} alt={name}/>
    
        <div className="details"> 
               <h1> {name}</h1> 
               <h1 className="price">${price}</h1>
        </div>
        {/* the info.substring method shows only 200 texts */}
      <p>
      {readMore? info : `${info.substring(0,220)}.......`}
      <button className="toggle-btn" onClick={()=>setReadMore(!readMore)}> {readMore?` Show Less` : `Read More`}</button>
      </p>
         <button className="delete-btn" onClick={()=>removedTour(id)}> Not Intrested</button>
        </div>
       
    </article>
    
 
   
}

export default Tour
