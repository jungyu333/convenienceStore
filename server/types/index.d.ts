import UserEntity from '../src/entities/User';

declare global {
  namespace Express {
    export interface User extends UserEntity {}
  }
}
