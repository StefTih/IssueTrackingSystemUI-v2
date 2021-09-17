import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issues } from '../issues';
import { Project } from '../project';
import { IssueService } from '../service/issue.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {

  // For the validation
  typeHasError = true;
  stateHasError = true;
  
  // For the issues
  issue = new Issues();
  id: number;
  submitted = false;

  // For the projects
  project = new Project();
  projectId: number;

  // For the Select tags
  types = ["bug", "story", "subtask", "epic"];
  states = ["To Do", "In Progress", "Done"];

  constructor(private issueService: IssueService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAttributes();
  }

  private getAttributes() {
    this.id = this.route.snapshot.params[`id`];
    this.issueService.getIssueById(this.id).subscribe(
      data => {
        this.issue = data;
      }, error => console.log(error));
  }

  private goToIssueList() {
    this.projectId = this.route.snapshot.params[`projectId`];
    this.router.navigate(['/issue-list', this.projectId])
  }

  onSubmit() {
    console.log(this.issue);
    this.issueService.updateIssue(this.id, this.issue).subscribe(
      data => {
        this.goToIssueList()
      });
  }

  validationType(value: string) {
    if (value === "default") {
      this.typeHasError = true;
    } else {
      this.typeHasError = false;
    }
  }
  
  validationState(value: string) {
      if (value === "default") {
        this.stateHasError = true;
      } else {
        this.stateHasError = false;
      }
    }
  
  onBack() {
    this.goToIssueList();
  }
}
