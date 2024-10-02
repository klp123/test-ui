import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loginUserDetails: any = {};
  public showHideSideBar$ = new BehaviorSubject<boolean>(false);
  public userLoggedIn$ = new Subject<boolean>();
  public userLoggedOut$ = new Subject<boolean>();
  public appliedGroupBy$ = new Subject<string>();
  public resetFormData$ = new Subject<boolean>();
  private loader: Loader;
  private configUrl = 'assets/config/';

  constructor(public http: HttpClient) { 
    this.loader = new Loader({
      apiKey: 'AIzaSyCXBJKXi7uQKcOL8dh4d9hatW6B8LFOgWc',
      libraries: ['places'],
    });
    this.loginUserDetails = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}') : {};
  }

  updateSideBar() {
    this.showHideSideBar$.next(true);
  }

    logInUser(status: boolean){
      this.userLoggedIn$.next(status);
    }

    logOutUser(){
      this.userLoggedOut$.next(true);
    }

    getLoggedInUserId(){
      return JSON.parse(localStorage.getItem('userId') || '{}');
    }

    getLoggedInUserData(){
      return this.loginUserDetails;
    }

    getLoggedInUserType(){
      return this.loginUserDetails?.recruiterPosition?.name;
    }

    getLoggedInUserName(){
      return this.loginUserDetails.firstName + ' ' + this.loginUserDetails.lastName;
    }

    getUserTypePermissions(userLoggedInType: string, page?: string) {
      const rules: any = {
        'benchSaleRecruiter': {
          submission: {
            visibility: true,
            delete: false
          },
          vendor: {
            visibility: true,
            delete: false
          },
          consultant: {
            visibility: true,
            delete: true
          },
          recruiter: {
            visibility: false,
            delete: false
          }
        },
        'admin': {
          submission: {
            visibility: true,
            delete: false
          },
          vendor: {
            visibility: true,
            delete: true
          },
          consultant: {
            visibility: true,
            delete: true
          },
          recruiter: {
            visibility: true,
            delete: true
          }
        },
        'teamLead': {
          submission: {
            visibility: true,
            delete: false
          },
          vendor: {
            visibility: true,
            delete: false
          },
          consultant: {
            visibility: true,
            delete: true
          },
          recruiter: {
            visibility: true,
            delete: true
          }
        }
      };
    
      // Check if user type exists
      if (rules[userLoggedInType]) {
        // Check if the page exists for the user type
        if (page && rules[userLoggedInType][page] !== undefined) {
          return rules[userLoggedInType][page];
        } else {
          // If no page or page does not exist, return the full user type object
          return rules[userLoggedInType];
        }
      } else {
        return null; // Return null or handle invalid user type case
      }
    }
    
    
    updateGroupBy(status: string) {
      this.appliedGroupBy$.next(status);
    }

    resetFormDataEvent() {
      this.resetFormData$.next(true);
    }

    getTableHeaders(path: any) {
      return this.http.get(this.configUrl + path + '.json');
    }

    loadGoogleMaps(): any {
      return this.loader.load();
    }

    downloadExcel(payload: any) {
      const url = 'http://localhost:5000/submission/getAll';
      payload.downloadExcel = true;
      this.http.post(url, payload, { responseType: 'blob' }).subscribe((blob: any) => {
        saveAs(blob, 'report.xlsx');
      }, error => {
        console.error('Error downloading file', error);
      });
    }
  
}
