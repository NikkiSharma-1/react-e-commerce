import React from "react";

const Products=props=>{
    
 return(
  <div>
   <div>{props.title}</div>
   <div>{props.price}</div>
   <div>{props.imageUrl}</div>
  </div>
 );
}
export default Products;