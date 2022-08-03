import React from "react";
export default function Productpage(props){

    return(

<div className="row">
    <div className="col">
      <h2>{props.products.name}</h2>
    </div>
    <div className="col">
    <button type="button" className="btn btn-danger" onClick={(index)=>{props.decrement(props.index);}}>-</button>
<button type="button" className="btn btn-warning">{props.products.quantity}</button>
<button type="button" className="btn btn-success" onClick={(index)=>{
    props.increment(props.index);
}}>+</button>
      
    </div>
    <div className="col">
      
     <h3>{props.products.quantity * props.products.price} </h3>

    </div> 

    <div className="col">
      
    <button type="button" className="btn btn-primary" onClick={()=>{
      props.removes(props.index);
    }} >Remove item</button>
 
     </div> 



  </div>


    )
}