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

export interface ITableRowProps {
  products: IProduct[];
}

export interface ITableRowCellProps {
  product: IProduct;
}

export interface IStockControllProps {
  stock: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
