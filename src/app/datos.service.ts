import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idatos } from '../app/datos';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
providedIn: 'root'

})
export class DatosService {
private apiUrl= environment.apiUrl;

constructor(private http: HttpClient) { }


getDatas(): Observable<User[]>  {
return this.http.get<User[]>(`${this.apiUrl}/users`);
   }

getData(): Observable<User>  {
return this.http.get<User>(`${this.apiUrl}/users/1`);
   }

   createData(user:User): Observable<User>  {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
       }


  }








