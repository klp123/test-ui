import { Component } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [SpeedDialModule],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss'
})
export class ActionButtonsComponent {
  items: any = [
    {
        icon: 'pi pi-pencil'
    },
    {
        icon: 'pi pi-refresh'
    },
    {
        icon: 'pi pi-trash'
    },
    {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
    },
    {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
    }
];
}
