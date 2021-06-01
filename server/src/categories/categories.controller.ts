import { Controller, Get } from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {Category as CategoryModel} from "@prisma/client";

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService
  ) {}

  @Get('/')
  getCategories(): Promise<CategoryModel[]> {
    return this.categoriesService.getCategories({})
  }
}
