import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common'; 
import { OuterExpressionKinds } from 'typescript';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  imports: [DropdownModule, FormsModule, CommonModule],
  standalone: true
})
export class DropdownComponent {
  @Input() dropDownValues: string[] = [];
  @Output() selectedValueEmitter: any = new EventEmitter();
  cities: any[] | undefined;
  selectedValue: any | undefined;
  selectedCity: any | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }

  onSelectValue(value: string) {
    this.selectedValueEmitter.emit(value);
  }
}
