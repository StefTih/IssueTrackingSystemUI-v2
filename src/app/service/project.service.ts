import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../entities/project";
import {Issues} from "../entities/issues";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseURL = '/issue-tracking-system/projects';
  // baseURLissues = '/issue-tracking-system/issues';

  constructor(private httpClient: HttpClient) { }

  getProjectsList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }

  addProject(project: Project): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,project);
  }

  getProjectById(id: number): Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL}/${id}`);
  }

  editProject(id: number, project: Project): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,project);
  }

  removeProject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getIssuesByProjectId(id: Project): Observable<Issues[]>{
    return  this.httpClient.get<Issues[]>(`${this.baseURL}/${id}/issues`);
  }
  
  removeIssueFromProject(projectId: number, id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${projectId}/issues/${id}/delete`);
  }
  
  addIssueToProject(project: Project, issueId: number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${project.id}/issues/${issueId}/add`,project);
  }

}
