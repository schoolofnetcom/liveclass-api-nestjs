import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import configuration from './../config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('mysqlOptions'),
      inject: [ConfigService]
    })
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
