import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  constructor(private userService:UserService,private router:Router){ }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.user);
    this.userService.userLogin(this.user.email,this.user.password).subscribe(data=> {
      alert("Login operation successful!");
      this.goToQuizSpace();
    },
    error => alert("Error, Please retry!"));
  }


  goToQuizSpace(){
    this.router.navigate(['/question']);
  }
}
