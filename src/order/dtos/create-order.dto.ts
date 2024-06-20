import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: [{ productId: 1, quantity: 2 }] })
    products: { productId: number; quantity: number }[];
  }
  
