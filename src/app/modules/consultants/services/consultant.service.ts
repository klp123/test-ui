import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private apiUrl = 'http://localhost:5000/user/';
  public addConsultantEvent$ = new Subject<Boolean>();

  constructor(private http: HttpClient) { }

  createConsultant(consultantData: any): any {
    return this.http.post<any>(this.apiUrl + 'create', consultantData);
  }

  searchConsultant(searchString: string): any {
    return this.http.get<any>(this.apiUrl + 'search?searchString=' + searchString);
  }

  getAllConsultants(filters: any): any {
    return this.http.post<any>(this.apiUrl + 'getAll', filters);
  }

  updateConsultant(toUpdateData: any): any {
    return this.http.post<any>(this.apiUrl + 'update', toUpdateData);
  }

  fileUpload(toUpdateData: any): any {
    return this.http.post<any>(this.apiUrl + 'upload', toUpdateData);
  }

  addConsultant(data: any) {
    this.addConsultantEvent$.next(data);
  }
}
