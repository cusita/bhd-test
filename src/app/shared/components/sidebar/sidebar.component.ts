import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openSidebar(): void {
    document.querySelector('nav').classList.toggle('nav--show');
  }

  public closeSidebar(): void {
    document.querySelector('nav').classList.remove('nav--show');
  }

}
