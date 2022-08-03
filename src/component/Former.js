import React from "react";
import {useForm} from 'react-hook-form';
export default function Former(){
  return(
    <form className=""  style={{marginTop:"2em", marginLeft:"40%",backgroundColor:"grey",width:"500px",color:"white"}}> 
    <div className="col-5">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="col-5" >
      <label htmlFor="exampleInputPassword1" className="form-label">
        mobile
      </label>
      <input
        type="number"
        className="form-control"
        id="exampleInputPassword1"
      />


    </div>

    
<div className="col-5" >
      <label htmlFor="exampleInputPassword1" className="form-label">
        password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
      </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  

    
)};