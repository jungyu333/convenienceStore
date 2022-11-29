import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps {
  type: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export interface ILogInData {
  email: string;
  password: string;
}
