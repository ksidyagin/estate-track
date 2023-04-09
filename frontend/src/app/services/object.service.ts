import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectI } from '../model/object.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<ObjectI> {
    return this.http.get<ObjectI>('api/objects/' + id);
  }

  find(): Observable<ObjectI[]> {

    return this.http.get<ObjectI[]>('api/objects');
  }

  create(obj: ObjectI): Observable<ObjectI> {
    return this.http.post<ObjectI>('api/objects', obj);
  }

  updateOne(obj: ObjectI) : Observable<ObjectI> {
    return this.http.put<ObjectI>('api/objects/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<ObjectI> {
    return this.http.delete<ObjectI>('api/objects/' + id);
  }

}