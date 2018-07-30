
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.scss']
})

export class ClientPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();

    $('.ui.modal.issueReporting')
    .modal('attach events', '#issueReportingModal', 'show');
  }

}