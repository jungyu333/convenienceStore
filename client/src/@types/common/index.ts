import { ReactNode } from 'react';

export interface ISubmitButtonProps {
  text: string;
}

export interface IDropdownMenuProps {
  setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handleCloseUserMenu: () => void;
  anchorElUser: null | HTMLElement;
}

export interface IProduct {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  price: number;
  stock: number;
  writerId: number;
  description: string;
  imageUrl: IProductImage[];
}

export interface IProductImage {
  id: number;
  createdAt: string;
  updatedAt: string;
  src: string;
}

export interface ITableHeaderProps {
  isCart?: boolean;
}

export interface ITableRowProps {
  products?: IProduct[];
  carts?: ICart[];
}

export interface ITableRowCellProps {
  product?: IProduct;
  cart?: ICart;
}

export interface ICart {
  id: number;
  createdAt: string;
  updatedAt: string;
  quantity: number;
  product: IProduct;
}

export interface IAuthProps {
  children: ReactNode;
}
