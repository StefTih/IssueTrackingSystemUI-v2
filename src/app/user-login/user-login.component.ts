import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../entities/users';
import { ProjectService } from '../service/project.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // usernameOrEmail = new String();
  // password = new String();

  user = new Users();
  submitted = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.checkLogin(this.user.username,this.user.password).subscribe(
      data => {
        console.log(data);
        // if(data['text'] === "AUTHORISATION DENIED") {
        //   con
        // }
      }
    )
  }
}
