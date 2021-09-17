import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../service/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../project";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project = new Project();
  id: number;
  submitted = false;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAttributes();
  }

  private getAttributes() {
    this.id = this.route.snapshot.params[`id`];
    this.projectService.getProjectById(this.id).subscribe(
      data => {this.project = data;
      }, error => console.log(error));
  }
  
  private goToProjectList() {
    this.router.navigate(['/projects']);
  }

  onSubmit() {
    console.log(this.project)
    this.projectService.editProject(this.id,this.project).subscribe(
      data =>{this.goToProjectList()}
    )
  }


}
