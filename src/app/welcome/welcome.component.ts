import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]
})
export class WelcomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  submitForm(title: string, description: string, team: string[], fundsPlan: string, fundsGoal: number) {
    var newProject: Project = new Project(title, description, team, fundsPlan, fundsGoal);
    this.projectService.addProject(newProject);
  }

  goToDetailPage(clickedProject){
    this.router.navigate(['projects', clickedProject.$key])
  }

}
