import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.authService.signInNew(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);
      this.router.navigate(['']);
    })
    .catch((err) => console.log('error: ' + err));
  }


  logInUser() {
    this.authService.signIn(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);
      this.router.navigate(['']);
    })
    .catch((err) => console.log('error: ' + err));
  }
}
