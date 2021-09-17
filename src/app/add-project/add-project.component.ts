import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import {ProjectService} from "../service/project.service";
import {error} from "@angular/compiler/src/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project = new Project();
  submitted = false;
  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveProject() {
    this.projectService.addProject(this.project).subscribe(
      data => {console.log(data);
        this.goToProjectList();
      },
      error => console.log(error));
  }

  goToProjectList(){
    this.router.navigate(['/projects']);
  }

  onSubmit() {
    console.log(this.project)
    this.saveProject();
  }

}
