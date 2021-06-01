import {Global, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.sevice";
import { CategoriesModule } from './categories/categories.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';

@Global()
@Module({
  imports: [
    CategoriesModule,
    ManufacturersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService
  ],
  exports: [
    PrismaService
  ]
})
export class AppModule {}
