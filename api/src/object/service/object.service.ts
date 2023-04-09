import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { map, mapTo, switchMap } from 'rxjs/operators';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { ObjectEntity } from '../model/object.entity';
import { ObjectI } from '../model/object.interface';
@Injectable()
export class ObjectService {
    constructor(
        @InjectRepository(ObjectEntity)
        private readonly userRepository: Repository<ObjectEntity>
    ) { }

    create(object: ObjectI): Observable<ObjectI> 
    {
        return from(this.userRepository.save(object)); 
    }
  
  
    findOne(id: number): Observable<ObjectI> {
        return from(this.userRepository.findOne({where: {id}}));
      }
  
    findAll(): Observable<ObjectI[]> 
    {
        return from(this.userRepository.find());
    }
  
    deleteOne(id: number): Observable<any> 
    {
        return from(this.userRepository.delete(id));
    }
  
    updateOne(id: number, object: ObjectI): Observable<any> 
    {
        return from(this.userRepository.update(id, object));
    }
}
