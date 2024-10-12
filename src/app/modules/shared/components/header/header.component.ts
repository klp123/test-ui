import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from "../../service/shared.service";
import { OverlayComponent } from '../overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [OverlayComponent, CommonModule, SubMenuComponent],
  standalone: true
})
export class HeaderComponent implements OnInit {

  menuList: string[] = [];

  constructor(public router: ActivatedRoute, public sharedSvc: SharedService){}
  
  ngOnInit(): void {
    let currentMenu = this.getCurrentRoute();
    this.menuList = [ currentMenu[3], currentMenu[4]];
  }

  getCurrentRoute() {
     let route: any = window.location.href;
     route = route.split('/');
     return route;
  }

  hambergerClick() {
    this.sharedSvc.updateSideBar();
  }
}
