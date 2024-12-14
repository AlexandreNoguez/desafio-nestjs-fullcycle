import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  async create(@Body() data: { id: string; symbol: string }) {
    return this.assetsService.createAsset(data);
  }

  @Get()
  async findAll() {
    return this.assetsService.getAllAssets();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.assetsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
  //   return this.assetsService.update(+id, updateAssetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.assetsService.remove(+id);
  // }
}
