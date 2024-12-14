import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(data: { asset_id: string; price: number }) {
    const assetExists = await this.prismaService.asset.findUnique({
      where: { id: data.asset_id },
    });

    if (!assetExists) {
      throw new NotFoundException(`O asset_id '${data.asset_id}' é inválido.`);
    }

    return this.prismaService.order.create({
      data: {
        asset_id: data.asset_id,
        price: data.price,
        status: 'open',
      },
    });
  }

  getAllOrders() {
    return this.prismaService.order.findMany({
      include: { asset: true },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
