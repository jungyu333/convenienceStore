import { Column, Entity, ManyToOne } from 'typeorm';

import BaseEntity from './Entity';
import Product from './Product';
import User from './User';

@Entity('carts')
export default class Cart extends BaseEntity {
  @Column()
  quantity: number;

  @ManyToOne(() => User, user => user.carts)
  user: User | null;

  @ManyToOne(() => Product, product => product.carts)
  product: Product;
}
