import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../entities/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  baseURL = '/issue-tracking-system/users';

  checkLogin(usernameOrEmail: String, password: String){
    return this.httpClient.get<Users>(`${this.baseURL}/usernameOrEmail/${usernameOrEmail}/password/${password}/login`);
  }

  saveUser(user: Users): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}
