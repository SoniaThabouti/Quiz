import { Routes } from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../signing/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
    {path:'question',component:QuestionComponent},
    {path:'login', component:LoginComponent},
];