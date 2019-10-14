import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { PeopleComponent } from './people/people.component';
import { Calc1Component } from './calc1/calc1.component';
import { Calc2Component } from './calc2/calc2.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PipeEx1Component } from './pipe-ex1/pipe-ex1.component';
import { LogoutComponent } from './logout/logout.component';
import { PipeEx2Component } from './pipe-ex2/pipe-ex2.component';
import { PipeEx3Component } from './pipe-ex3/pipe-ex3.component';
import { PipeEx4Component } from './pipe-ex4/pipe-ex4.component';
import { PipeEx5Component } from './pipe-ex5/pipe-ex5.component';
import { PipeEx6Component } from './pipe-ex6/pipe-ex6.component';
import { TitlePipe } from './title.pipe';
import { PipeDashBoardComponent } from './pipe-dash-board/pipe-dash-board.component';
import { StudentsComponent } from './students/students.component';
import { HeadingDirective } from './heading.directive';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    PeopleComponent,
    Calc1Component,
    Calc2Component,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    DashBoardComponent,
    PipeEx1Component,
    LogoutComponent,
    PipeEx2Component,
    PipeEx3Component,
    PipeEx4Component,
    PipeEx5Component,
    PipeEx6Component,
    TitlePipe,
    PipeDashBoardComponent,
    StudentsComponent,
    HeadingDirective,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
