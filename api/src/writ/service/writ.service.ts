import { Injectable } from '@nestjs/common';
import { WritEntity } from '../model/writ.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WritI } from '../model/writ.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class WritService {

    constructor(
        @InjectRepository(WritEntity)
        private readonly userRepository: Repository<WritEntity>
    ) { }

    create(object: WritI): Observable<WritI> 
    {
        return from(this.userRepository.save(object)); 
    }
  
  
    findOne(id: number): Observable<WritI> {
        return from(this.userRepository.findOne({where: {id}}));
      }
  
    findAll(): Observable<WritI[]> 
    {
        return from(this.userRepository.find());
    }
  
    deleteOne(id: number): Observable<any> 
    {
        return from(this.userRepository.delete(id));
    }
  
    updateOne(id: number, object: WritI): Observable<any> 
    {
        return from(this.userRepository.update(id, object));
    }

}
