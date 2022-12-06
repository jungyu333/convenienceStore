import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Product from './Product';

@Entity('images')
export default class Image extends BaseEntity {
  @Column()
  src: string;

  @ManyToOne(() => Product, product => product.imageUrl)
  @JoinColumn()
  product: Product;
}
