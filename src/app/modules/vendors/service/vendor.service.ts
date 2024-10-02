import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:5000/vendor/';
  private companyApiUrl = 'http://localhost:5000/company/';
  public addVendorEvent$ = new Subject<Boolean>();
  
  constructor(private http: HttpClient) { }
  
  createVendor(vendorData: any): any {
    return this.http.post<any>(this.apiUrl + 'create', vendorData);
  }

  searchVendor(searchString: string): any {
    return this.http.get<any>(this.apiUrl + 'search?searchString=' + searchString);
  }

  getAllVendors(filters: any): any {
    return this.http.post<any>(this.apiUrl + 'getAll', filters);
  }

  updateVendor(toUpdateData: any): any {
    return this.http.post<any>(this.apiUrl + 'update', toUpdateData);
  }

  addVendor(data: any) {
    this.addVendorEvent$.next(data);
  }

  searchCompany(searchString: string): any {
    return this.http.get<any>(this.companyApiUrl + 'search?searchString=' + searchString);
  }

  createCompany(payload: string): any {
    return this.http.post<any>(this.companyApiUrl + 'create', payload);
  }
}
