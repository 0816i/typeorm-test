import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @CreateDateColumn({ name: "createdAt", type: "datetime" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updatedAt", type: "datetime" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deletedAt", type: "datetime" })
  deletedAt!: Date;

  @OneToMany(() => Category, (category) => category.user, {
    cascade: true,
    eager: true,
  })
  categories: Category[];
}
