import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  @Input() projectToFund: Project;
  @Output() addFundsSender = new EventEmitter();
  projectId: string;
  projectToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
     this.projectToDisplay = dataLastEmittedFromObserver;

     console.log(this.projectToDisplay);
   })

  }

  addFunds(donation) {
    this.projectToDisplay.fundsActual += parseInt(donation);
    this.projectService.updateProject(this.projectToDisplay);
    console.log(this.projectToDisplay.fundsActual);

  }

}
