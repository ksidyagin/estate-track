import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectI } from '../model/object.interface';

@Injectable({
  providedIn: 'root'
})
export class FileService {


    
constructor(private http:HttpClient) { }

// Returns an observable
upload(file:any):Observable<any> {

    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
    console.log(file);
      
    // Make http post request over api
    // with formData as req
    return this.http.post('http://localhost:3000/api/files/upload', formData)

}
}