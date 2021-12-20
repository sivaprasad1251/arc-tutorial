import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userToken = false; //at first you set usertoken as false

     
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
       // here actually what you do is
       //cal to HTTP call to Backend API and get Auth Token for user
       this.userToken = false;

      if(this.userToken){
        return true;
      }else{
        return false;
      }
      
  }
  
}
