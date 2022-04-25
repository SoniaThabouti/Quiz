import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/user';
  constructor(private httpClient: HttpClient) {}

  //login to pass the data from the server to the controllers
  userLogin(email:String,password:String): Observable<Object> {
    console.log(email,password);
    return this.httpClient.get(`${this.baseUrl}/${email}/${password}`);
  }

  //to create a user account
  createAccount(user:User):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
