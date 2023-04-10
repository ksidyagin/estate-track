import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WritService } from '../service/writ.service';
import { WritI } from '../model/writ.interface';
import { Observable, of } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('writ')
@Controller('writ')
export class WritController {
    constructor(
        private objectService: WritService
      ) { }


      @Post()
      create(@Body()object: WritI): Observable<WritI> 
      {
          return this.objectService.create(object);
      }


      @Get()
      findAll(): Observable<WritI[]> 
      {
          return this.objectService.findAll();
      }

      @Get(':id')
      findOne(@Param('id') id: number): Observable<WritI> 
      {
          return this.objectService.findOne(id);
      }

      @Delete(':id')
      deleteOne(@Param('id')id: string): Observable<WritI> 
      {
          return this.objectService.deleteOne(Number(id));
      }
  

      @Put(':id')
      updateOne(@Param('id')id: string , @Body()object: WritI): Observable<WritI>  
      {
          return this.objectService.updateOne(Number(id), object);
      }
}
