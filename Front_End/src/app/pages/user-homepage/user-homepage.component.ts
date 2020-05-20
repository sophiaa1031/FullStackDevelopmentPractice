import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { userMenus } from '../../models/user-menu';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  userMenu = userMenus;
  selectedMenu: Menu;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(userMenuEach: Menu): void {
    this.selectedMenu = userMenuEach;
  }
} 
