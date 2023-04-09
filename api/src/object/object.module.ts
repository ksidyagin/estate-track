import { Module } from '@nestjs/common';
import { ObjectService } from './service/object.service';
import { ObjectController } from './controller/object.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectEntity } from './model/object.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ObjectEntity])
  ],
  controllers: [ObjectController],
  providers: [ObjectService]
})
export class ObjectModule {}
