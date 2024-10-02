import { Component, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.scss',
  imports: [MessagesModule],
  standalone: true
})
export class InfoMessageComponent {

  @Input()  messages: Message[] | any;
}
