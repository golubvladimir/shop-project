import {Global, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.sevice";
import { CategoriesModule } from './categories/categories.module';

@Global()
@Module({
  imports: [
    CategoriesModule
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
