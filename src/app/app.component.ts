import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languages: any[];
  skills: any[];
  jobs: any[];
  state: string;
  user: any;

  constructor(private us: UserService) {}

  getUser(username: string): void {
    this.us.getUser(username).subscribe(
      ({ body }) => {
        this.languages = body.languages;
        this.jobs = body.jobs;
        this.user = body.person;
        this.skills = body.strengths;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setState(state: string): void {
    this.state = state;
  }
}
