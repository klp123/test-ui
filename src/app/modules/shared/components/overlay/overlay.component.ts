import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

import { Router } from '@angular/router';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
  imports: [CommonModule, OverlayPanelModule, PanelModule, PanelMenuModule, ButtonModule],
  standalone: true
})
export class OverlayComponent {
  loginUserData = this.sharedSvc.getLoggedInUserData();

  constructor(public router: Router,  public sharedSvc: SharedService) {}

  ngOnInit() {
    this.loginUserData = this.sharedSvc.getLoggedInUserData();
    this.sharedSvc.userLoggedIn$.subscribe((status: boolean) => { 
      if (status) {
        this.loginUserData = this.sharedSvc.getLoggedInUserData();
      }
    });
  }

  logout() {
    localStorage.clear();
    this.sharedSvc.logOutUser();
    this.router.navigateByUrl('');
    setTimeout(() =>{
      location.reload();
    }, 1000);
  }
}
