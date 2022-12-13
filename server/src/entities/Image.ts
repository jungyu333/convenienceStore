import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Product from './Product';
import BaseEntity from './Entity';

@Entity('images')
export default class Image extends BaseEntity {
  @Column()
  src: string;

  @ManyToOne(() => Product, product => product.imageUrl, {
    nullable: true,
  })
  @JoinColumn()
  product: Product | null;
}
