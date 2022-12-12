import { Length } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Image from './Image';
import User from './User';
import BaseEntity from './Entity';

@Entity('products')
export default class Product extends BaseEntity {
  @Length(1, 255)
  @Column()
  name: string;

  @Length(1, 255)
  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column({ name: 'writerId' })
  writerId: number;

  @ManyToOne(() => User, user => user.products, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'writerId' })
  writer: User;

  @OneToMany(() => Image, image => image.product, {
    nullable: false,
  })
  imageUrl: Image[];
}
