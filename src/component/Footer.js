import React from "react";
export default function Footer(props){
 
    return(

       
         <div className="row fixed-bottom" >
           <div className="col">
                 <button type="button" class="btn btn-primary" onClick={()=>{
                    props.reset();
                 }}>Reset</button>
           </div>
            <div className="col">
                <h2>Total Amount={props.totalamt}</h2>
            </div>

            <div className="col">
                <button type="button" class="btn btn-secondary">Pay now</button>
            </div>

        </div>


    )
    ;

}