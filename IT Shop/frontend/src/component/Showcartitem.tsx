import product from "../data/product"
import Card from "./Card"
import "../stylesheet/Showcartitem.css"
import ProductCart from "../data/ProductInCart"


import React, { useState } from 'react';
import CartItem from './Card';
import { Cartinterface } from "../interface/cart";

interface ShowProps {
  onCartDataChange: (data: Cartinterface[] | null) => void;
}
function Showcartitem({ }: ShowProps) {

  const [cartData, setCartData] = useState<Cartinterface[] | null>(null);

    return (
      


        <div className="container-showcartitem">
              
              <CartItem onCartDataChange={setCartData}/>
        </div>
            

    );
  };


export default Showcartitem;