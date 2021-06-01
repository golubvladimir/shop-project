import { Controller, Get, Param } from '@nestjs/common';
import { ManufacturersService } from "./manufacturers.service";
import { Manufacturer as ManufacturerModel } from "@prisma/client";

@Controller('manufacturers')
export class ManufacturersController {
  constructor(
    private manufacturersService: ManufacturersService
  ) {}

  @Get('/')
  getManufacturers(): Promise<ManufacturerModel[]> {
    return this.manufacturersService.getManufacturers({});
  }

  @Get('/:id')
  getManufacturer(
    @Param('id') id: number
  ): Promise<ManufacturerModel> {
    return this.manufacturersService.getManufacturer(id);
  }
}
