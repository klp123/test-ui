import { Component } from '@angular/core';

import { SharedService } from './modules/shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang';
  hideSideMenu = false;
  showFilters = false;
  authPage = false;

  constructor(public sharedSvc: SharedService) {}

  ngOnInit() {
    let url = location.href;
    if (url.search('list') > -1) {
      this.showFilters;
    }
    if (url.search('auth') > -1) {
      this.authPage = true;
    } else {
      this.authPage = false;
    }
    this.sharedSvc.userLoggedIn$.subscribe((status: boolean) => {
      if (status) {
        this.authPage = false;
      } else {
        this.authPage = true;
      }
    });
    this.sharedSvc.showHideSideBar$.subscribe((status: boolean) => {
      if (status) {
        this.hideSideMenu = !this.hideSideMenu;
      }
    });
    this.sharedSvc.userLoggedOut$.subscribe((status: boolean) => {
      if (status) {
        this.authPage = true;
      }
    });
  }

  // <button (click)="hambergerClick()">Click me</button>
  hambergerClick() {
    this.sharedSvc.updateSideBar();
  }


}
