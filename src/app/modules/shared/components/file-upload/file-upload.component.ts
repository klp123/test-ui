import { Component, EventEmitter, Output } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  
  @Output() fileData: any = new EventEmitter();

  onUpload(event: any) {
    this.fileData.emit(event);
  }
}
