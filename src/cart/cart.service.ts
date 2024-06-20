import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddToCartDto } from './dtos/add-to-cart.dto';
import { UpdateCartDto } from './dtos/update-cart.dto';
import { RemoveFromCartDto } from './dtos/remove-from-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async addToCart(addToCartDto: AddToCartDto) {
    // Add to cart logic here
  }

  async getCartByUserId(userId: number) {
    return this.prisma.cart.findUnique({
      where: { userId },
      include: { cartItems: true },
    });
  }

  async updateCart(updateCartDto: UpdateCartDto) {
    // Update cart logic here
  }

  async removeFromCart(removeFromCartDto: RemoveFromCartDto) {
    // Remove from cart logic here
  }
}
