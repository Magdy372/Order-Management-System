import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { PrismaService } from '../prisma/prisma.service'; // Adjust based on your project structure
import { CartService } from './cart.service';

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService, PrismaService], // Ensure all necessary providers are included

    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
