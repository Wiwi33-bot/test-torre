import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public httpClient: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.httpClient.get(`/api/bios/${username}`, {
      observe: 'response',
    });
  }
}
