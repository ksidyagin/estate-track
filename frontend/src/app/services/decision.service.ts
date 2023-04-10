import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectI } from '../model/object.interface';
import { DecisionI } from '../model/decisions.interface';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<DecisionI> {
    return this.http.get<DecisionI>('api/decision/' + id);
  }

  find(): Observable<DecisionI[]> {

    return this.http.get<DecisionI[]>('api/decision');
  }

  create(obj: DecisionI): Observable<DecisionI> {
    return this.http.post<DecisionI>('api/decision', obj);
  }

  updateOne(obj: DecisionI) : Observable<DecisionI> {
    return this.http.put<DecisionI>('api/decision/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<DecisionI> {
    return this.http.delete<DecisionI>('api/decision/' + id);
  }

}