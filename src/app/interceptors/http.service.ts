import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {
    console.log('HttpInterceptorService instantiated'); // Log interceptor instantiation
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor called'); // Check if this logs
    // interceptor logic...
  
    // Add a return statement to return an Observable<HttpEvent<any>>
    return next.handle(req);
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const userDataString = localStorage.getItem('userData'),
  //   userData: any = userDataString ? JSON.parse(userDataString) : {},
  //   createdBy = userData.firstName + ' ' + userData.lastName,
  //   createdById =  userData._id,
  //   createdByEmail =  userData.email;

  //   // Clone the request and add the createdBy field to the body (for POST/PUT) or query params (for GET)
  //   let modifiedReq = req;
  //   console.log(JSON.stringify(modifiedReq));
  //   if (req.method === 'GET') {
  //     const params = req.params.set('createdBy', createdBy);
  //     modifiedReq = req.clone({ params });
  //   } else if (req.method === 'POST' || req.method === 'PUT') {
  //     const body = { ...req.body, createdBy, createdById, createdByEmail };
  //     modifiedReq = req.clone({ body });
  //   }

  //   // Pass the modified request to the next handler
  //   return next.handle(modifiedReq);
  // }
}
