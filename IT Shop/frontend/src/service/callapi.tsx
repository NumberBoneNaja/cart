import { Cartinterface } from "../interface/cart";


const apiUrl = "http://localhost:8000"

export async function GetCart(id: number) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/cart/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }

  export async function UpdateQuantity(p0: Cartinterface[], id: number, newQuantity: number) {
    try {
      const response = await fetch(`${apiUrl}/updateCart/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update quantity for item with ID: ${id}`);
      }
  
      // หลังจากอัปเดตสำเร็จ ให้เรียก GetCart เพื่อดึงข้อมูลตะกร้าล่าสุด
      const updatedCart = await GetCart(1);
      if (updatedCart) {
        console.log(`Updated quantity for item with ID: ${id} to ${newQuantity}`);
        return updatedCart; // อัปเดตข้อมูลตะกร้า
      } else {
        console.error('Failed to update cart');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Update Quantity Error:', error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
    return false;
  }


  export async function DeleteCart(id: number | undefined) {
    if (!id) {
      console.error("Invalid ID");
      return false;
    }
  
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const res = await fetch(`${apiUrl}/deleteCart/${id}`, requestOptions);
      if (res.status === 200) {
        return await res.json();
      } else {
        console.error(`Error: ${res.status} - ${res.statusText}`);
        return false;
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
  }


  export async function GetAllProduct() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`http://localhost:8000/getAllProducts`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
    
  }

  export async function AddToCart(customerId: number, productId: number, quantity: number) {
    const apiUrl = "http://localhost:8000";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ProductID: productId, CustomerID: customerId, Quantity: quantity }),
    };
  
    try {
      const response = await fetch(`${apiUrl}/c/1`, requestOptions);
      if (response.status === 200 || response.status === 201) {
       
        return await response.json();
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return false;
      }
    } catch (error) {
      console.error("Network error:", error);
      return false;
    }
  }
  
  


// ChatGPT
// export async function GetCart(id: number) {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const response = await fetch(`${apiUrl}/cart/${id}`, requestOptions);
    
//     if (response.status === 200) {
//       const data = await response.json();
//       return data;
//     } else {
//       console.error(`Error: ${response.status} - ${response.statusText}`);
//       return false;
//     }
//   } catch (error) {
//     console.error("Network error:", error);
//     return false;
//   }
// }


// export async function UpdateUser(id: number, newquantity: number) {
//     const requestOptions = {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ quantity: newquantity }),
//     };
  
//     let res = await fetch(`${apiUrl}/updateCart/:id`, requestOptions)
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           return false;
//         }
//       });
  
//     return res;
//   }
  