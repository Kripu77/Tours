import React,{useState} from 'react'

import Tour from './Tour';

const Tours = ({tours, removedTour, fetchData}) => {
const[isEmpty, setIsEmpty] = useState(false);

 if(tours.length==0){
   
    return  <div>
        <h1> You've caught up would you like to refresh the page? </h1>
    <button className="clear-btn" onClick={()=>fetchData()}> Refresh</button>
    </div>
}

 return <>
<h1 className="title"> Kripu's Tour's Gallery</h1>
<div className="bar"></div>
<h2  className="tours-count"> There are currently {tours.length} tours available</h2>
{
    tours.map((value)=>{
      //pass the value as props and obtain it in our tour card component
    //   use spread operator to include all
        return <Tour key={value.id} {...value} removedTour={removedTour}/>
    })
}


 </>

}

export default Tours
