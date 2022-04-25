import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user:User=new User();
  constructor(private userService:UserService,private router:Router){ }
  

  ngOnInit(): void {
  }

  CreateUser(){
    console.log(this.user);
    this.userService.createAccount(this.user).subscribe(data=> {
      alert("Creating account operation successful!");
      this.goToQuizSpace();
    },
    error => alert("Error, Please retry!"));
  }


  goToQuizSpace(){
    this.router.navigate(['/question']);
  }

}
