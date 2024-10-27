import { Component } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [OverlayPanelModule, ButtonModule, CommonModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  selectedMenu = '/submissions/list';
  constructor(private router: Router) { }

  onClickMenu(link: string) {
    this.selectedMenu = link;
    this.router.navigate([link]);
  }
}
