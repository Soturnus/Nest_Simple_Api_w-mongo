import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://soturno:soturno@localhost:27017/demo?authSource=admin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
