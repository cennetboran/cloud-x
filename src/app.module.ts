import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { PersonelInfoModule } from './personel-info/personel-info.module';
import { ProductsModule } from './products/products.module';
import { ResourceModule } from './resource/resource.module';
import { configService } from './services/config.service';

@Module({
  imports: [
    CustomersModule,
    OrdersModule,
    PersonelInfoModule,
    ProductsModule,
    ResourceModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
