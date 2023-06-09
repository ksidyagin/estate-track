import { Module } from '@nestjs/common';
import { ParseService } from './parse.service';
import { ParseController } from './parse.controller';

@Module({
  providers: [ParseService],
  exports: [ParseService],
  controllers: [ParseController],
})
export class ParseModule {}
