import { useEffect, useState } from "react";
import Header from "../component/Header"
import Showcartitem from "../component/Showcartitem";
import Summary from "../component/Summary";
import TopicCart from "../component/TopicCart"


// import './App.css';


import Card from "../component/Card";
import { Cartinterface } from "../interface/cart";


function Cart() {
  const [cartData, setCartData] = useState<Cartinterface[] | null>(null);
  

  const [icon, setIcon] = useState("/images/icon/Hamburger.png");

      return (
          <>
               <Header icon={icon}/>  
                
                    <TopicCart />
                    <Card onCartDataChange={setCartData}/>
                    <Summary cartItems={cartData}/>
  
              
             
          </>
      )
  }













// function Cart(){
    
//     const [icon, setIcon] = useState("/images/icon/Hamburger.png");

//     return (
//         <>
//              <Header icon={icon}/>  
              
//                   <TopicCart/>
//                    <Showcartitem/>  
//                    <Summary/>

            
           
//         </>
//     )
// }

export default Cart;