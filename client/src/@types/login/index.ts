import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps {
  type: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  isAuth?: boolean;
}

export interface ILogInData {
  email: string;
  password: string;
}
