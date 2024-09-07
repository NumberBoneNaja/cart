import "../stylesheet/Cart.css"
// import Product from '../image/download.jpg'
import Close from '../icon/close.png'


import { useEffect, useState } from "react";
import { Cartinterface } from "../interface/cart";
import { AddToCart, DeleteCart, GetAllProduct, GetCart, UpdateQuantity } from "../service/callapi";
import { Product } from "../interface/product";

import Summary from "../component/Summary";


// import ProductCart  from "../data/ProductInCart"

const url="http://localhost:8000/uploads/"

interface ShowlistProps {
  onCartDataChange: (data: Cartinterface[] | null) => void;
}


function Card ({ onCartDataChange }: ShowlistProps){
  const [data, setData] = useState<Cartinterface[] | null>(null);
    const [product, setProduct] = useState<Product[] | null>(null);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    const incrementQuantity = (productId: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 1) + 1,
        }));
    };

    const decrementQuantity = (productId: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] > 1 ? prevQuantities[productId] - 1 : 1,
        }));
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    const fetchCartData = async () => {
        const res = await GetCart(1);
        if (res && Array.isArray(res.data)) {
            setData(res.data);
            onCartDataChange(res.data); // ส่งข้อมูลตะกร้าไปยัง App
        } else {
            console.error("Unexpected response type:", res);
        }
    };


    const handleUpdateQuantity = async (id: number, newQuantity: number) => {
        await UpdateQuantity(data || [], id, newQuantity);
        fetchCartData(); // ดึงข้อมูลตะกร้าใหม่หลังจากอัปเดต
    };

    const handleDeleteCart = async (id: number) => {
        await DeleteCart(id);
        fetchCartData(); // ดึงข้อมูลตะกร้าใหม่หลังจากลบ
    };

   


    return (

              <div className="container-showcartitem">
                   {data ? (
                data.map((item, index) => (
            <div key={index} >
                <div className="card">
                   
                       <div className="image">
                            <img src=
                           //  {ProductCart.thumbnailUrl}
                           {url+item.Product.Pictures[0].File}
                           alt="" id='model'/>
                      </div>
                      <div className="description">
                           <div className="name">
                               {item.Product.ProductName}
                               {/* {product.productName} */}
                                 
                       </div>
                            <div className="quantity">
                               <div className="minus">
                                   <button onClick={() => handleUpdateQuantity(item.ID, item.Quantity - 1)}
                           disabled={item.Quantity <= 1}
                                  >-</button>
                               </div>
                               <div className="value">
                                   <p>{item.Quantity}</p>
                               </div>
                               <div className="plus">
                                   <button  onClick={() => handleUpdateQuantity(item.ID, item.Quantity + 1)}
                                       disabled={item.Product.Stock < item.Quantity + 1}>+</button>
                               </div>
                               
                           </div>
                          
                           <div className="mon">
                               <p>฿ {item.Product.PricePerPiece}</p>
                           </div>
                      </div>
                     
                      <div className="delete">
                      <button onClick={() => handleDeleteCart(item.ID)} id="move"><img src={Close} alt="" id='close'/></button> 
                      </div>
                   </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )} 
            
              </div>
               
                // <div className="card">
                   
                //    <div className="image">
                //         <img src=
                //         //  {ProductCart.thumbnailUrl}
                //         {url+cart.Product.Pictures[0].File}
                //         alt="" id='model'/>
                //    </div>
                //    <div className="description">
                //         <div className="name">
                //             {cart.Product.ProductName}
                //             {/* {product.productName} */}
                              
                //     </div>
                //          <div className="quantity">
                //             <div className="minus">
                //                 <button onClick={handleDecrease} disabled={cart.Quantity <= 1}>-</button>
                //             </div>
                //             <div className="value">
                //                 <p>{cart.Quantity}</p>
                //             </div>
                //             <div className="plus">
                //                 <button  onClick={handleIncrease} disabled={cart.Quantity >= cart.Product.Stock}>+</button>
                //             </div>
                            
                //         </div>
                       
                //         <div className="mon">
                //             <p>฿ {cart.Product.PricePerPiece}</p>
                //         </div>
                //    </div>
                  
                //    <div className="delete">
                //    <button onClick={() => onDelete(cart.ID)} id="move"><img src={Close} alt="" id='close'/></button> 
                //    </div>
                // </div>
            )
        }








// function Card( props: { product: any; }){
//  function Card( props: { ProductCart: any }){

//        const {ProductCart} =props;
//        const num = ProductCart.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
//     // const {product} = props;
//     // const num = product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    
//     const [counter,setCounter] =useState(1)
//     function ButtonIncreaseClick (){
//         return setCounter(counter+1)
//     }
//     function ButtonDecreseClick (){
//         if (counter<=1){
//             return setCounter(1)
//         }
//         else {
//             return setCounter(counter-1)
//         }
        
//     }

//     return (
//         <div className="card">
           
//            <div className="image">
//                 <img src=
//                  {ProductCart.thumbnailUrl}
//                 // {Product} 
//                 alt="" id='model'/>
//            </div>
//            <div className="description">
//                 <div className="name">
//                     {ProductCart.Name}
//                     {/* {product.productName} */}
                      
//             </div>
//                  <div className="quantity">
//                     <div className="minus">
//                         <button onClick={ButtonDecreseClick}>-</button>
//                     </div>
//                     <div className="value">
//                         <p>{counter}</p>
//                     </div>
//                     <div className="plus">
//                         <button  onClick={ButtonIncreaseClick}>+</button>
//                     </div>
                    
//                 </div>
               
//                 <div className="mon">
//                     <p>฿ {num}</p>
//                 </div>
//            </div>
          
//            <div className="delete">
//                 <img src={Close} alt="" id='close'/>
//            </div>
//         </div>
//     )
// }
export default Card