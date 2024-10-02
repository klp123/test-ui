import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  imports: [DialogModule, DropdownComponent],
  standalone: true
})
export class DialogComponent {

  @Input() actionValues: string[] = [];
  @Output() selectedValueEmitter: any = new EventEmitter();
  selectedValue: any | undefined;
  visible = true;

  onSelectAction(value: string) {
    this.selectedValueEmitter.emit(value);
  }
}
