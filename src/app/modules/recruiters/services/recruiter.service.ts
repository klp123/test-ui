import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  private apiUrl = 'http://localhost:5000/user/';

  constructor(private http: HttpClient) { }

  createRecruiter(consultantData: any): any {
    return this.http.post<any>(this.apiUrl + 'create', consultantData);
  }

  searchRecruiter(searchString: string): any {
    return this.http.get<any>(this.apiUrl + 'search?searchString=' + searchString);
  }

  getAllRecruiters(filters: any): any {
    return this.http.post<any>(this.apiUrl + 'getAll', filters);
  }

  updateRecruiter(toUpdateData: any): any {
    return this.http.post<any>(this.apiUrl + 'update', toUpdateData);
  }
}

