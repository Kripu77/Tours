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
        {/* using ternary operator to check the state of the readmore section */}
{readMore? info : `${info.substring(0,200)}....`}
{/* toggling the read more bnutton inner text as the state of the read more  */}
<button onClick={()=>setReadMore(!readMore)} className="toggle-btn"> {readMore? ` Show Less` : ` Show More`}

</button>

    </p>
         <button className="delete-btn" onClick={()=>removedTour(id)}> Not Intrested</button>
        </div>
       
    </article>
    
 
   
}

export default Tour
