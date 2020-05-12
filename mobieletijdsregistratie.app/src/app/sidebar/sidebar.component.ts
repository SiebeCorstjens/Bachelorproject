import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from "@angular/material";
import { AuthService } from '../services/core/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  UserFirstName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.UserFirstName = this.authService.UserFirstName;
  }

  @ViewChild('sidebar') sidebar: MatSidenav;

  toggleSidebar() {
    this.sidebar.toggle();
  }

  logout() {
    this.authService.signout();
  }
}
