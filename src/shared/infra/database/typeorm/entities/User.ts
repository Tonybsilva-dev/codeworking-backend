import {
  Column, Entity
} from 'typeorm';
import { BaseEntity } from './Base';

@Entity('users')
class User extends BaseEntity {

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

}

export { User };

