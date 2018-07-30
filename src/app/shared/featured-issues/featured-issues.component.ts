import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-featured-issues',
  templateUrl: './featured-issues.component.html',
  styleUrls: ['./featured-issues.component.scss']
})
export class FeaturedIssuesComponent implements OnInit {

  issues; totalIssues; noIssue; filter;
  constructor(public issueService: IssueService) { }
  ngOnInit() {
    this.getIssues();
  }

  getIssues(){
    this.issueService.get({status: this.filter}).subscribe(data => {
      console.log(data)
      this.issues = data.issues;
      this.totalIssues = data.count;
    },
    err => {
      this.noIssue = true;
    })
  }

  push(id,type){
    this.issueService.updatePush(id, {push:type}).subscribe(res => {
      this.getIssues();

    },
    err => {
      window.alert('Failed to update');
    })
  }

}
