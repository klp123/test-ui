import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-sub-menu2',
  templateUrl: './sub-menu2.component.html',
  standalone: true,
  imports: [ DialogModule, CommonModule, ButtonModule],
  styleUrl: './sub-menu2.component.scss'
})
export class SubMenu2Component {
  visible: boolean = false;

    position: any;

    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }
}
