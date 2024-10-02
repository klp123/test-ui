
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private apiUrl = 'http://localhost:5000/';
  public addConsultant$ = new Subject<Boolean>();
  public addVendor$ = new Subject<Boolean>();

  constructor(private http: HttpClient) { }

  createSubmission(submissionDate: any): any {
    return this.http.post<any>(this.apiUrl + 'submission/create', submissionDate);
  }

  searchConsultant(searchString: string, type: string): any {
    return this.http.get<any>(this.apiUrl + 'user/searchUser?searchStr=' + searchString + '&type=' + this.getUserTypeCode(type));
  }

  searchVendorCompany(searchString: string): any {
    return this.http.get<any>(this.apiUrl + 'company/search?searchStr=' + searchString);
  }

  searchVendor(searchString: string, companyName: string): any {
    return this.http.get<any>(this.apiUrl + 'vendor/search?searchStr=' + searchString + '&company=' + companyName);
  }

  getAllSubmissions(filters: any): any {
    return this.http.post<any>(this.apiUrl + 'submission/getAll', filters);
  }

  updateSubmission(toUpdateData: any): any {
    return this.http.post<any>(this.apiUrl + 'submission/updateSubmission', toUpdateData);
  }

  getUserTypeCode(type: string): any {
    const userCodes: any = {'consultant': 1001, 'vendor': 1002};
    return userCodes[type];
  }

  openAddConsultant() {
    this.addConsultant$.next(true);
  }

  openAddVendor() {
    this.addVendor$.next(true);
  }
}

