import { Injectable } from '@nestjs/common';
import { DecisionEntity } from '../model/decision.entity';
import { DecisionI } from '../model/decision.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { WritI } from 'src/writ/model/writ.interface';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class DecisionService {
    constructor(
        @InjectRepository(DecisionEntity)
        private readonly userRepository: Repository<DecisionEntity>
    ) { }

    create(object: WritI): Observable<DecisionI> 
    {
        return from(this.userRepository.save(object)); 
    }
  
  
    findOne(id: number): Observable<DecisionI> {
        return from(this.userRepository.findOne({where: {id}}));
      }
  
    findAll(): Observable<DecisionI[]> 
    {
        return from(this.userRepository.find());
    }
  
    deleteOne(id: number): Observable<any> 
    {
        return from(this.userRepository.delete(id));
    }
  
    updateOne(id: number, object: DecisionI): Observable<any> 
    {
        return from(this.userRepository.update(id, object));
    }
}
