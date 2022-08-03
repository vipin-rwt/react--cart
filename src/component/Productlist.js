import React from "react";
import Productpage from "./Productpage.js"
export default function Productlist(props){
return(

      props.products.map((product,i)=>{

               return  (<Productpage products={product} key={i} increment={props.increment} decrement={props.decrement} index={i} removes={props.remove} />);

      })
 
)

}