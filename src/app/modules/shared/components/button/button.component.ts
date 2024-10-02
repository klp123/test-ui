import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
type SeverityType = "success" | "info" | "warning" | "danger" | "help" | "primary" | "secondary" | "contrast" | null | undefined;
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [ButtonModule, CommonModule],
  standalone: true
})

export class ButtonComponent {
  @Input() severity: any;
  @Input() rounded: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
}
