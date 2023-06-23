import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed: string = 'navbar__collapse';
  constructor() {}

  ngOnInit(): void {}

  collapse() {
    if (this.collapsed == 'navbar__collapse') {
      this.collapsed = 'navbar__collapse show';
    } else {
      this.collapsed = 'navbar__collapse';
    }
  }
}
