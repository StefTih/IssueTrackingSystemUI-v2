import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issues } from '../entities/issues';
import { Project } from '../entities/project';
import { IssueService } from '../service/issue.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  //For errors
  typeHasError= true;
  stateHasError=true;
  // For the issues
  issue = new Issues();
  submitted = false;
  data: any;

  // For the projects
  project = new Project();
  projectId: number;

  // For the Select tags
  types = ["bug","story","subtask","epic"];
  states = ["To Do","In Progress","Done"];

  constructor(private issueService: IssueService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
  }

  private saveIssue() {
    this.issueService.addIssue(this.issue).subscribe(
      data => {
        console.log(data);
        this.data = data["id"];
        console.log(this.data);
        this.getProject()},
      error => console.log(error));
  }

  private getProject() {
    this.projectId = this.route.snapshot.params[`projectId`];
    console.log(this.projectId);
    this.projectService.getProjectById(this.projectId).subscribe(
      data => {this.project = data;
        console.log(data);
        this.saveIssueInProject();
      }, error => console.log(error));
  }

  private saveIssueInProject() {
    this.projectService.addIssueToProject(this.project,this.data).subscribe(
      data => {
        console.log(data);
        this.goToIssueList();},
      error => console.log(error));
  }

  onSubmit() {
    this.saveIssue();
  }

  validationType(value: string) {
    if (value === "default") {
      this.typeHasError = true;
    } 
    else {
      this.typeHasError = false;
    }
  }
  
  private goToIssueList() {
    this.projectId = this.route.snapshot.params[`projectId`];
    this.router.navigate(['/issue-list',this.projectId]);
  }

  onBack() {
    this.goToIssueList();
  }

  validationState(value: string) {
    if (value === "default") {
      this.stateHasError = true;
    }
    else {
      this.stateHasError = false;
    }
  }
}
