import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
  standalone: true,
  imports: [FileUploadModule, CommonModule]
})
export class UploadComponent {
  @Output() fileUploaded: any = new EventEmitter();
  uploadedFiles: any[] = [];
  formData: any;

  storeFile(event: any) {
    this.formData = new FormData();
    this.formData.append('file', event.target.files[0]);
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.formData.append('file', event.target.files[0]);
    }
  }

  onSelect(event: any) {
    this.formData = new FormData();
    this.formData.append('file', event.files[0]);
    this.fileUploaded.emit(this.formData);
    this.uploadedFiles = [];
    this.formData = new FormData();
  }

  onRemove() {
    this.formData = new FormData();
    this.uploadedFiles = [];
  }
}
