import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import {EditProjectComponent} from "../edit-project/edit-project.component";
import {IssueListComponent} from "../issue-list/issue-list.component";
import { UpdateIssueComponent } from '../update-issue/update-issue.component';
import { AddIssueComponent } from '../add-issue/add-issue.component';


const routes: Routes = [
  {path: 'projects',component: ProjectListComponent},
  {path: 'add-project', component: AddProjectComponent},
  {path: 'edit-project/:id', component: EditProjectComponent},
  {path: 'issue-list/:id', component: IssueListComponent},
  {path: 'update-issue/:id/:projectId', component: UpdateIssueComponent},
  {path: 'add-issue/:projectId', component: AddIssueComponent},
  {path: '', redirectTo: 'projects', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
