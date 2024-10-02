import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:5000/email';

  constructor(private http: HttpClient) {}

  sendEmail(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sendEmail`, payload);
  }

  sendBulkEmail(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sendBulkEmail`, payload);
  }

  searchConsultant(searchString: string, type: string): any {
    return this.http.get<any>('http://localhost:5000/' + 'user/searchUser?searchStr=' + searchString + '&type=' + this.getUserTypeCode(type));
  }

  getUserTypeCode(type: string): any {
    const userCodes: any = {'consultant': 1001, 'vendor': 1002};
    return userCodes[type];
  }
}
