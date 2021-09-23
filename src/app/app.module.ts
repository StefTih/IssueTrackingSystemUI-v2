
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HttpClientModule } from "@angular/common/http";
import { IssueListComponent } from './issue-list/issue-list.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EditProjectComponent } from './edit-project/edit-project.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    IssueListComponent,
    AddProjectComponent,
    EditProjectComponent,
    EditProjectComponent,
    UpdateIssueComponent,
    AddIssueComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
