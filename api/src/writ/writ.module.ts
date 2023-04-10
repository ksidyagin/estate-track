import { Module } from '@nestjs/common';
import { WritController } from './controller/writ.controller';
import { WritService } from './service/writ.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WritEntity } from './model/writ.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([WritEntity])
  ],
  controllers: [WritController],
  providers: [WritService]
})
export class WritModule {}
