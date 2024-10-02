import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [EditorModule, CommonModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

}
