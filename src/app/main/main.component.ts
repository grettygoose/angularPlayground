import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { JobsInfo, ProjectsInfo, BioInfo, SchoolInfo, OnlineInfo } from '../resumeInfo';
import {  JOBS, PROJECTS, BIO, SCHOOLS, ONLINE, SKILL } from '../resumeDetails';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainComponent implements OnInit {
  jobs = JOBS;
  projects = PROJECTS;
  bio = BIO;
  schools = SCHOOLS;
  online = ONLINE;
  skill = SKILL;


  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
