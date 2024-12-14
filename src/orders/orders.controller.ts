import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(
    @Body() data: { asset_id: string; price: number; status?: string },
  ) {
    if (data.status) {
      throw new BadRequestException(
        'O campo "status" não deve ser enviado na requisição.',
      );
    }

    return this.ordersService.createOrder({
      asset_id: data.asset_id,
      price: data.price,
    });
  }

  @Get()
  async findAll() {
    return this.ordersService.getAllOrders();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ordersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(+id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ordersService.remove(+id);
  // }
}
