import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IssueService } from '../../shared/services/issue.service';

declare var $:any;

@Component({
  selector: 'app-issue-reporting-modal',
  templateUrl: './issue-reporting-modal.component.html',
  styleUrls: ['./issue-reporting-modal.component.scss']
})
export class IssueReportingModalComponent implements OnInit {

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    $('.ui.form')
      .form({
        fields: {
          title: {
            identifier: 'title',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your issue\'s title'
              }
            ]
          },
          location: {
            identifier: 'location',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter issue\'s location'
              }
            ]
          },
          category: {
            identifier: 'category',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter an issue\'s category'
              }
            ]
          },
          description: {
            identifier: 'description',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter issue\'s description'
              }
            ]
          }
        }
      });

      // $('.ui.search.selection.dropdown').dropdown();
  }
  onSubmit(rd: NgForm): void {
    this.issueService.report(rd).subscribe(
      data => {
        console.log(data)
        $('.ui.modal').modal('hide');
      },
      err => {
        window.alert(err.error.message);
      });
  }
}
