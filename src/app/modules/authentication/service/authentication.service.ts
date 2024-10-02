import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:5000/user';

  constructor(private http: HttpClient) {}

  login(loginCred: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginCred, { withCredentials: true });
  }

  updateUser(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, payload, { withCredentials: true });
  }

  forgotPassword(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgotPassword`, payload, { withCredentials: true });
  }

  getProtectedResource(): Observable<any> {
    return this.http.get(`${this.apiUrl}/protected`, { withCredentials: true });
  }
}
