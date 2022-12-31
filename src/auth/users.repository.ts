import { Entity, EntityRepository, Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Entity()
export class UsersRepository {
  constructor(private dataSource: DataSource) { }
  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { username, password } = createUserDTO;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    let user = this.dataSource.getRepository(User).create({
      username: username,
      password: hashedPassword,
    });
    return this.dataSource.getRepository(User).save(user);
  }
}
