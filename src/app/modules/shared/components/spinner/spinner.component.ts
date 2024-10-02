import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false;
}
