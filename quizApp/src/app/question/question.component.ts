import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  user:User=new User();
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.getListQuestions();
  }

  getListQuestions(){
     this.questionService.getQuestion()
     .subscribe(response=>{
       console.log(response);
     })
  }

}
