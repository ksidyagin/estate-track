import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DecisionService } from '../service/decision.service';
import { DecisionI } from '../model/decision.interface';
import { Observable, of } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('decisions')
@Controller('decision')
export class DecisionController {
    constructor(
        private objectService: DecisionService
      ) { }


      @Post()
      create(@Body()object: DecisionI): Observable<DecisionI> 
      {
          return this.objectService.create(object);
      }


      @Get()
      findAll(): Observable<DecisionI[]> 
      {
          return this.objectService.findAll();
      }

      @Get(':id')
      findOne(@Param('id') id: number): Observable<DecisionI> 
      {
          return this.objectService.findOne(id);
      }

      @Delete(':id')
      deleteOne(@Param('id')id: string): Observable<DecisionI> 
      {
          return this.objectService.deleteOne(Number(id));
      }
  

      @Put(':id')
      updateOne(@Param('id')id: string , @Body()object: DecisionI): Observable<DecisionI>  
      {
          return this.objectService.updateOne(Number(id), object);
      }
}
