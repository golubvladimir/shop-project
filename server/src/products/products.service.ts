import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.sevice";
import {Prisma} from "@prisma/client";

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService
  ) {}

  getProducts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        manufacturer: true,
        category: true
      }
    })

  }
}
