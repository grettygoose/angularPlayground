import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {  JOBS, PROJECTS, BIO, SCHOOLS, ONLINE, SKILL } from '../resumeDetails';

@Component({
  selector: 'app-sttr',
  templateUrl: './sttr.component.html',
  styleUrls: ['./sttr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SttrComponent implements OnInit {
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

  goBack(): void {
    this.location.back();
  }

}
