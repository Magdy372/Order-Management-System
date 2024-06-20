import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Product Name' })
  name: string;

  @ApiProperty({ example: 'Product Description', required: false })
  description?: string;

  @ApiProperty({ example: 100.0 })
  price: number;

  @ApiProperty({ example: 10 })
  stock: number;
}

  