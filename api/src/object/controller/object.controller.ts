import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ObjectService } from '../service/object.service';
import { ObjectI } from '../model/object.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';


@ApiTags('Objects')
@Controller('objects')
export class ObjectController {

    constructor(
        private objectService: ObjectService
      ) { }

    //   @ApiBearerAuth()
    //   @UseGuards(JwtAuthGuard)
      @Post()
      create(@Body()object: ObjectI): Observable<ObjectI> 
      {
          return this.objectService.create(object);
      }


      @Get()
      findAll(): Observable<ObjectI[]> 
      {
          return this.objectService.findAll();
      }

      @Get(':id')
      findOne(@Param('id') id: number): Observable<ObjectI> 
      {
          return this.objectService.findOne(id);
      }

      @Delete(':id')
      deleteOne(@Param('id')id: string): Observable<ObjectI> 
      {
          return this.objectService.deleteOne(Number(id));
      }
  

      @Put(':id')
      updateOne(@Param('id')id: string , @Body()object: ObjectI): Observable<ObjectI>  
      {
          return this.objectService.updateOne(Number(id), object);
      }
    
}
