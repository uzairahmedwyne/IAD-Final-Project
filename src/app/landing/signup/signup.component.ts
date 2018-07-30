import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../services/user.service';

declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  returnUrl:string;
  isPasswordMatched:boolean=false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

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

      $('.ui.search.selection.dropdown').dropdown();

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // matchPasswords(){
  //   if(sd.value.password===sd.value.confirmPassword){
  //     this.isPasswordMatched=true;
  //   }
  //   else{
  //     this.isPasswordMatched=false;
  //     window.alert("password & confirm password didnot matched");
  //     return;
  //   }
  // }
  onSubmit(sd: NgForm): void {
    //sd.value.cnic=Number.parseInt(sd.value.cnic);
    this.userService.signUp(sd).subscribe(
      data => {
        console.log(data)
        this.router.navigate([this.returnUrl]);
      },
      err => {
        window.alert(err.error.message);
      });
  }

}
