import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  imports: [ FormsModule ],
  standalone: true
})
export class TextAreaComponent {
  value: any;
}
