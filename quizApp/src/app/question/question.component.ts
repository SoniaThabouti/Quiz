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
  public Questions: any = [];
  public QuestionCurrent:number= 0;
  public points:number=0;
  counter=60;
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.getListQuestions();
  }

  getListQuestions(){
     this.questionService.getQuestion()
     .subscribe(response=>{
       this.Questions = response.questions;
     })
  }

  //increase the counter to move to the next question and decrease the counter for the previous one
  nextQuestion(){
  this.QuestionCurrent++;
  }

  perviousQuestion(){
   this.QuestionCurrent--;
  }

}
