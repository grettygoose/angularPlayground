import { Component, OnInit } from '@angular/core';
import { JobsInfo, ProjectsInfo, BioInfo, SchoolInfo, OnlineInfo } from '../resumeInfo';
import {  JOBS, PROJECTS, BIO, SCHOOLS, ONLINE } from '../resumeDetails';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  jobs = JOBS;
  projects = PROJECTS;
  bio = BIO;
  schools = SCHOOLS;
  online = ONLINE;


  constructor() { }

  ngOnInit() {
  }

}
