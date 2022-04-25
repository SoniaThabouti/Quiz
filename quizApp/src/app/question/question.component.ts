import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  user:User=new User();
  constructor() { }

  ngOnInit(): void {
  }

}
