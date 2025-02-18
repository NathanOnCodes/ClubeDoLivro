import { Delete, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
