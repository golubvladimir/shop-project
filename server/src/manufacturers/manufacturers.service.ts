import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.sevice";
import {
  Manufacturer as ManufacturerModel,
  Prisma
} from "@prisma/client";

@Injectable()
export class ManufacturersService {
  constructor(
    private prisma: PrismaService
  ) {}

  getManufacturers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ManufacturerWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByInput;
  }): Promise<ManufacturerModel[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.manufacturer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  getManufacturer(id: number): Promise<ManufacturerModel> {
    return this.prisma.manufacturer.findUnique({
      where: {
        id
      }
    })
  }
}
