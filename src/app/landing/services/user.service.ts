import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {baseUrl} from '../../shared/baseUrl';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(sd){
    return this.http.post<any>(baseUrl+'users', {name:sd.value.username,email:sd.value.email,cnic:sd.value.cnic,password:sd.value.password,city:sd.value.city,area:sd.value.area})
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
