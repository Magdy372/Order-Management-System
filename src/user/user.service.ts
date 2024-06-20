import { Injectable } from '@nestjs/common';
//import { PrismaService } from '../prisma.service';
import { PrismaService } from '../prisma/prisma.service';


import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findOne(userId: number) {
    return this.prisma.user.findUnique({
      where: { userId },
    });
  }
  
  findAll() {
    return this.prisma.user.findMany();
  }
}
