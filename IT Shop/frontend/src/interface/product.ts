export interface Product{
  ID: number;
CreatedAt: string;
UpdatedAt: string;
DeletedAt: string | null;
ProductName: string;
Description: string;
PricePerPiece: number;
Stock: number;
CategoryID: number;
BrandId: number;
Carts: any;
Pictures: any;
}