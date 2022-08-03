import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/Productlist";
import Footer from "./component/Footer.js";
import Addcart from "./component/Addcart.js";
import Former from "./component/Former.js"



function App() {
 const products=[
    {
      name:"vipin",
      price:1222,
      quantity:0
    },

    {
      name:"nipin",
      price:2222,
      quantity:0
    },

    {
      name:"tipin",
      price:3222,
      quantity:0
    }


 ];

 const [productquan, setProductquan]=useState(products);
 const [totalamt,setTotalamt]=useState(0);
 let increment=(index)=>{
    
  let newproductquan=[...productquan];
  let newTotalAmount = totalamt;
  newproductquan[index].quantity++;
  newTotalAmount += newproductquan[index].price;

  setProductquan(newproductquan);
  setTotalamt(newTotalAmount);


 }

 let decrement=(index)=>{
     let nproduct=[...productquan];
     let newTotalAmount = totalamt;
       if(nproduct[index].quantity>0){
       
        nproduct[index].quantity--;
        newTotalAmount -= nproduct[index].price;
      
        console.log(nproduct[index].price);
        setProductquan(nproduct);
        setTotalamt(newTotalAmount);
      
       }
      

 }

 let rset=()=>{
   
       let ncontent=[...productquan];
       ncontent.map((product)=>{
                
        product.quantity=0;

       });
       setProductquan(ncontent);
       setTotalamt(0);
 }
  

 const remove=(index)=>{
       
        let removlist=[...productquan];
        let namt=totalamt;
     
        removlist.splice(index,1);
        namt-= ((removlist[index].quantity)*(removlist[index].price));
        console.log(namt);
        setProductquan(removlist);
        setTotalamt(namt);
  

 }

 const Addnew =(na,pr)=>{

        let prod=[...productquan];
        prod.push({
          name:na,
          price:pr,
          quantity:0,
        });

        setProductquan(prod);

 }



  return (
    <>

        <Navbar/>

        <main>
          <Addcart Addnew={Addnew}/>
          <ProductList products={productquan}  increment={increment} decrement={decrement}  remove={remove}  />
          <Former />
        </main>


        <footer>
          <Footer totalamt={totalamt} reset={rset}/>
        </footer>

        

    </>

  );
}

export default App;
