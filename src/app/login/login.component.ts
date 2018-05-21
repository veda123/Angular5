import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string="InFlytCloud";

  constructor(private _router:Router) { }

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  login():void{
    // this.loginForm.setErrors({
    //   invalidLogin : true
    // })
    this._router.navigate(['/admin']);
  }

  get username()
  {
    return this.loginForm.get('username');
  }

  get password()
  {
    return this.loginForm.get('password');
  }


  ngOnInit() {
  }

}
