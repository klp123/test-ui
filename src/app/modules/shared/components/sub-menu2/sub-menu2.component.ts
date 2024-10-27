import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sub-menu2',
  templateUrl: './sub-menu2.component.html',
  standalone: true,
  imports: [ DialogModule, CommonModule, ButtonModule],
  styleUrl: './sub-menu2.component.scss'
})
export class SubMenu2Component {
  visible: boolean = false;
  selectedMenu = '/submissions/list';
    position: any;

    constructor(private router: Router) {}
    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }

    onSelectMenu(link: string) {
      this.selectedMenu = link;
      this.router.navigate([link]);
    }
}
