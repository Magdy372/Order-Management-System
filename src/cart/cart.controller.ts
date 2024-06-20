import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddToCartDto } from './dtos/add-to-cart.dto';
import { UpdateCartDto } from './dtos/update-cart.dto';
import { RemoveFromCartDto } from './dtos/remove-from-cart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  @ApiOperation({ summary: 'Add to cart' })
  @ApiResponse({ status: 201, description: 'Product added to cart.' })
  addToCart(@Body() addToCartDto: AddToCartDto) {
    return this.cartService.addToCart(addToCartDto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user cart' })
  @ApiParam({ name: 'userId', required: true, description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Return user cart.' })
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCartByUserId(Number(userId));
  }

  @Put('update')
  @ApiOperation({ summary: 'Update cart' })
  @ApiResponse({ status: 200, description: 'Cart updated.' })
  updateCart(@Body() updateCartDto: UpdateCartDto) {
    return this.cartService.updateCart(updateCartDto);
  }

  @Delete('remove')
  @ApiOperation({ summary: 'Remove from cart' })
  @ApiResponse({ status: 200, description: 'Product removed from cart.' })
  removeFromCart(@Body() removeFromCartDto: RemoveFromCartDto) {
    return this.cartService.removeFromCart(removeFromCartDto);
  }
}
