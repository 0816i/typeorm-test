import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.categories)
  user: User;

  @Column()
  categoryName: string;

  @CreateDateColumn({ name: "createdAt", type: "datetime" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updatedAt", type: "datetime" })
  updatedAt!: Date;
}
