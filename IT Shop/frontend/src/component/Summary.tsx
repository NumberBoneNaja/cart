import "../stylesheet/Summary.css"
import ProductCart from "../data/ProductInCart"


import { Cartinterface } from "../interface/cart";

interface TotalPriceProps {
  cartItems: Cartinterface[] | null;
}

function Summary ({cartItems}: TotalPriceProps) {
  

  const calculateTotalPrice = () => {
      if (!cartItems) return 0;

      return cartItems.reduce((total, item) => {
          return total + (item.Product.PricePerPiece * item.Quantity);
      }, 0);
  };

  const totalPrice = calculateTotalPrice();

    return (
            <div className="summary-container">
                <div className="Summary">
                    
                    <div className="sum-topic">
                        <p>Summary</p>
                       
                    </div>
                    <div className="under">
                           <hr />   
                    </div>
                    
                    <div className="data">
        
                        <p>ยอดรวม</p>
                        <p id="fill1">฿{totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="data">
                        <p>ส่วนลด</p>
                        <p id="fill1">-฿0.00</p>
                    </div>
                    <div className="data">
                        <p>ยอดรวม</p>
                        <p id ='fill1'>฿{totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="submit">
                        <button id="checkout">ชำระเงิน</button>
                    </div>
                </div>
            </div>
                
            )
        }



// function Summary() {
//     const calculateTotalPrice = (cart: Product[]): number => {
//         return cart.reduce((total, product) => total + product.price, 0);
//       }
    
//       const totalPrice = calculateTotalPrice(ProductCart);
//       const formattedPrice = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//     return (
//     <div className="summary-container">
//         <div className="Summary">
            
//             <div className="sum-topic">
//                 <p>Summary</p>
               
//             </div>
//             <div className="under">
//                    <hr />   
//             </div>
            
//             <div className="data">

//                 <p>ยอดรวม</p>
//                 <p id="fill1">฿{formattedPrice}</p>
//             </div>
//             <div className="data">
//                 <p>ส่วนลด</p>
//                 <p id="fill1">-฿0.00</p>
//             </div>
//             <div className="data">
//                 <p>ยอดรวม</p>
//                 <p id ='fill1'>฿{formattedPrice}</p>
//             </div>
//             <div className="submit">
//                 <button id="checkout">ชำระเงิน</button>
//             </div>
//         </div>
//     </div>
        
//     )
// }
export default Summary