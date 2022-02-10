import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UseResolver implements Resolve<User[]> {
  constructor(private user: UsersService , private router: Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.user.getUsers()
  }
}
