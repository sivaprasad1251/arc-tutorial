import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ComonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //auth tokens
    //user role validations etc
    const API_KEY = 'API123'; //authentication key/token for outgoing req
    const ROLE_KEY ='ROLE123';
    
    //return next.handle(request.clone({setHeaders: {API_KEY, ROLE_KEY}}));//copy that outgoing req and modify it by inserting headers
                                              //THIS HEADER ADDED TO THE ALL THE OUT GOING REQ'S
  
    return next.handle(request.clone({setHeaders: {API_KEY, ROLE_KEY}}));
  }                                                      
}
