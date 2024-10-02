import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:5000/vendor/create';

  constructor(private http: HttpClient) { }
  createVendor(vendorData: any): any {
    return this.http.post<any>(this.apiUrl, vendorData);
  }
}

