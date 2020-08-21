import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Repositories } from '../models/repositories';

@Injectable()
export class ReposiotoryService {
  private repositoriesUrl = "search/repositories";
  constructor(private http: HttpClient) {}

  public searchRepository(query: string): Observable<Repositories> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.get<Repositories>(
      environment.GithubAPIURL + `${this.repositoriesUrl}?q=${query}`,
      { headers }
    );
  }
}
