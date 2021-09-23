import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Issues} from "../entities/issues";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private baseURL = "/issue-tracking-system/issues";
  constructor(private httpClient: HttpClient) { }

  getIssuesList(): Observable<Issues[]>{
    return this.httpClient.get<Issues[]>(`${this.baseURL}`);
  }

  getIssueById(id: number): Observable<Issues>{
    return this.httpClient.get<Issues>(`${this.baseURL}/${id}`);
  }

  updateIssue(id: number, issue: Issues): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,issue);
  }

  addIssue(issue: Issues): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,issue);
  }
}
