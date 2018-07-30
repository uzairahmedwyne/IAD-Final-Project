import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

const loginURL='http://192.168.137.44:8000/api/auth';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(ld){
    return this.http.post<any>(loginURL, {email:ld.value.email,password:ld.value.password})
    .pipe(
      map((user => {
        console.log(user)
        if (user && user.token) {
          localStorage.setItem('token', user.token);
        }
        return user;
      }))
    );
  }

}
