import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.sevice";
import {
  Category,
  Prisma
} from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(
    private prisma: PrismaService
  ) {}

  getCategories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByInput;
  }): Promise<Category[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  getCategory(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id: id
      }
    })
  }
}
