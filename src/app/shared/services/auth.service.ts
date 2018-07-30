import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {baseUrl} from '../../shared/baseUrl';
import { Router } from '../../../../node_modules/@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,private router:Router) { }

  login(ld){
    return this.http.post<any>(baseUrl+'auth', {email:ld.value.email,password:ld.value.password})
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
  
  signOut():void{
    localStorage.removeItem('token');
    this.router.navigate(['/landing']);
  }

}
