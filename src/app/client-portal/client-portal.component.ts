
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

declare var $:any;

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.scss']
})

export class ClientPortalComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();

    $('.ui.modal.issueReporting')
    .modal('attach events', '#issueReportingModal', 'show');
  }

  onClick():void{
    this.authService.signOut();
  }
}