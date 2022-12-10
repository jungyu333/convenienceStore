import {
  FieldError,
  UseFormGetValues,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { ISignUpData } from '../signup';

export interface IInputProps {
  type: string;
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

export interface ILogInFormProps {
  isAdmin?: boolean;
  headerText: string;
}
