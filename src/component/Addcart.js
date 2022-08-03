import React, { useState } from "react";

export default function Addcart(props){

  const [values, setValues]=useState({
    Productname:"",
    Productprice:0,
  });

  const inp=(e)=>{
    const {name,value}=e.target;
    setValues((prev)=>{
      return({...prev,[name]:value});
    });
  
  }



    return(
        
        <div classname="input-group" >
        <span classname="input-group-text">Name</span>
        <br></br>
        <input type="text" id="nam" aria-label="Name" classname="form-control" name="Productname" onChange={inp} required   />
        <br></br>
        <br></br>
        <span classname="input-group-text">Price</span>
        
        <input type="number"  id="num" aria-label="Price" classname="form-control"  name="Productprice" onChange={inp}  required/>
<br />
<br />
<button onClick={()=>{
          let newv=values;
        props.Addnew(newv.Productname,newv.Productprice);
        
        }}>submit</button>
         
      </div>



    );
}