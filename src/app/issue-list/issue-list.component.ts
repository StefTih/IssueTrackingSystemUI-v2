import { Component, OnInit } from '@angular/core';
import {Issues} from "../issues";
import {ProjectService} from "../service/project.service";
import { HttpClient } from '@angular/common/http';
import {IssueService} from "../service/issue.service";
import {Project} from "../project";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issues[];
  id: Project;
  projectId: number;
  project = new Project();
  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getProjectById();
    this.getIssues();
  }

  private getProjectById() {
    this.projectId = this.route.snapshot.params[`id`];
    this.projectService.getProjectById(this.projectId).subscribe(
      data => {
        this.project = data;
      }, error => {
        console.log("Error occures: ",error);
      }
    );
  }

  private getIssues() {
    this.id = this.route.snapshot.params[`id`];
    this.projectService.getIssuesByProjectId(this.id).subscribe(
      data => {
        this.issues = data;
      },error => {
        console.log("Error occured : "+error);
      }
    );
  }

  updateIssue(id: number, projectId: number) {
    this.router.navigate(['update-issue',id,projectId]);
  }

  removeIssue(projectId: number, id: number) {
    this.projectService.removeIssueFromProject(projectId,id).subscribe(
      data => {
        console.log(data);
        this.getIssues();
      }
    )
  }

  addIssue(projectId: number) {
    this.router.navigate(['add-issue',projectId]);
  }


  onBack() {
    this.router.navigate(['projects']);
  }
}
