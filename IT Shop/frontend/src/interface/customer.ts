export interface Customer{
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Prefix: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  BirtDay: string;
  Carts: any;
}
