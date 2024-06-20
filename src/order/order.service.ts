import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    // Create order logic here
  }

  async findOne(orderId: number) {
    return this.prisma.order.findUnique({
      where: { orderId },
      include: { orderItems: true },
    });
  }

  async updateStatus(orderId: number, status: string) {
    return this.prisma.order.update({
      where: { orderId },
      data: { status },
    });
  }

  async findByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
    });
  }

}
