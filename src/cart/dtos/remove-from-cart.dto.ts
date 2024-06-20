import { ApiProperty } from '@nestjs/swagger';

export class RemoveFromCartDto {
    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 3 })
    productId: number;
  }
  
  