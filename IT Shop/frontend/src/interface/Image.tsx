import { Product } from "./product";

export interface Picture {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: string | null
    ProductId: number
    Product: Product
    File: string
}