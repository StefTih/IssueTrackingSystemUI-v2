import { Component, OnInit } from '@angular/core';
import {Project} from "../entities/project";
import {ProjectService} from "../service/project.service";
import {error} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  editProject(id: number) {
    this.router.navigate(['edit-project',id]);
  }

  viewIssues(id: number) {
    this.router.navigate(['issue-list',id]);
  }

  removeProject(id: number) {
    this.projectService.removeProject(id).subscribe(
      data => {
        console.log(data);
        this.getProjects();
      }
    )
  }

  private getProjects() {
    this.projectService.getProjectsList().subscribe(
      data => {
        this.projects = data;
        console.log(data);
      }
    )
  }

}
