import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoGuard implements Resolve<any> {
  
  //we will have a service- call service API to get details 
  
  /*
  this.userService.getAccountInformation(userId).subscribe(data => {})
   
  //from this api call you get data like userObj
  */
 userObj = {
   userId:10,
   userName:'siva'
 };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
  }
  
  
}
