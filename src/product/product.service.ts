import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findOne(productId: number) {
    return this.prisma.product.findUnique({
      where: { productId },
    });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }
}
