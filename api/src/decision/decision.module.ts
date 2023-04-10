import { Module } from '@nestjs/common';
import { DecisionController } from './controller/decision.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecisionEntity } from './model/decision.entity';
import { DecisionService } from './service/decision.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([DecisionEntity])
  ],
  controllers: [DecisionController],
  providers: [DecisionService]
})
export class DecisionModule {}
