import { IsEmail, Length } from 'class-validator';
import bcrypt from 'bcryptjs';
import BaseEntity from './Entity';
import { BeforeInsert, Column, Entity, Index, OneToMany } from 'typeorm';
import { Expose } from 'class-transformer';
import Product from './Product';

@Entity('users')
export default class User extends BaseEntity {
  @Index()
  @IsEmail(undefined, { message: '이메일 주소가 잘못되었습니다.' })
  @Length(1, 255, { message: '이메일 주소는 비워둘 수 없습니다.' })
  @Column({ unique: true })
  email: string;

  @Length(1, 32, { message: '닉네임은 1자 이상이어야 합니다' })
  @Column()
  nickname: string;

  @Length(10, 255, { message: '비밀번호는 10자 이상이어야 합니다.' })
  @Column({ nullable: true })
  password: string;

  @Length(1, 255)
  @Column({ type: 'text', nullable: true })
  avatarUrn: string | null;

  @Length(1, 32)
  @Column({ default: 0 })
  role: number;

  @Column({ default: 'local' })
  provider: string;

  @Expose()
  get avatarUrl(): string {
    if (this.avatarUrn) {
      return `${process.env.SERVER_BASE_URL}/${this.avatarUrn}`;
    } else {
      return 'https://www.gravatar.com/avatar?d=mp&f=y';
    }
  }

  @OneToMany(() => Product, product => product.writer, { cascade: true })
  products: Product[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) this.password = await bcrypt.hash(this.password, 6);
  }
}
