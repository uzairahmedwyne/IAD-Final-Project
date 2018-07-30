import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl:string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    $('.ui.form')
      .form({
        fields: {
          email: {
            identifier: 'email',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your e-mail'
              },
              {
                type: 'email',
                prompt: 'Please enter a valid e-mail'
              }
            ]
          },
          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your password'
              },
              {
                type: 'length[6]',
                prompt: 'Your password must be at least 6 characters'
              }
            ]
          }
        }
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(ld: NgForm): void {
    this.authService.login(ld).subscribe(
      Data => {
        console.log(Data)
        if(Data.data.role==='citizen'){
        this.router.navigate([this.returnUrl]);
        }
        else if(Data.data.role==='admin'){
          this.router.navigate(['admin-portal']);
          }
      },
      err => {
        window.alert(err.error.message);
      });
  }
}
