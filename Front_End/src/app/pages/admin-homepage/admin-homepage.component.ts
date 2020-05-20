import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { adminMenus } from '../../models/admin-menu';

@Component({
  selector: 'app-admin-homepage', 
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  adminMenu = adminMenus;

  selectedMenu: Menu;

  constructor() { }

  ngOnInit(): void {
  }

  // onSelect(adminMenuEach: Menu): void {
  //   this.selectedMenu = adminMenuEach;
  // }

}
