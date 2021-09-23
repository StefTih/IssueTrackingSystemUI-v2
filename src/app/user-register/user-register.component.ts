import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../entities/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user = new Users();
  submitted = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void { 
  }

  onSubmit() {
    this.userService.saveUser(this.user).subscribe(
      data => {console.log(data);
      }
    )
  }


}
