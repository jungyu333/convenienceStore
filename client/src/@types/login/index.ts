import {
  FieldError,
  UseFormGetValues,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { IProduct } from '../common';
import { ISignUpData } from '../signup';

export interface IInputProps {
  type: 'email' | 'number' | 'text' | 'password' | 'textarea';
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  isEmail?: boolean;
  isAuth?: boolean;
  getValues?: UseFormGetValues<ISignUpData>;
}

export interface ILogInData {
  email: string;
  password: string;
}

export interface IMyInfo {
  id: number;
  email: string;
  nickname: string;
  avatarUrn: string;
  avatarUrl: string;
  provider: string;
  role: number;
  products?: any;
}

export interface IAdminInfo extends IMyInfo {
  product: IProduct[];
}

export interface ILogInFormProps {
  isAdmin?: boolean;
  headerText: string;
}

export interface ISocialButtonProps {
  type: 'kakao' | 'google';
}
