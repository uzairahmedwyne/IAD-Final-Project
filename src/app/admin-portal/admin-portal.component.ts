import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.ui.dropdown').dropdown();
  }

}
