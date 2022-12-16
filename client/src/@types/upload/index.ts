import { IProduct } from '../common';

export interface IDeleteImageButton {
  image: string;
}

export interface IProductData {
  name: string;
  price: string;
  stock: string;
  description: string;
}

export interface IStockControllProps {
  productId: number;
  stock: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IEditProductStockData {
  stock: number;
  productId: number;
}

export interface IDeleteProductData {
  id: number;
}
