import { Component } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss',
  imports: [AutoCompleteModule, FormsModule],
  standalone: true
})
export class AutoCompleteComponent {
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];

  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}
