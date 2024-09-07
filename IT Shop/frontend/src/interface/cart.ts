
import { Product } from "./product";

export interface Cartinterface{
    
        ID: number;
        CreatedAt: string;
        DeletedAt: string | null;
        Quantity: number;
        CustomerId: number;
        // Customer: Customer;
        ProductId: number;
        Product: Product;
     
}