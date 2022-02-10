import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, delay, map, refCount, switchMap } from 'rxjs/operators';
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$!:Observable<User[]>;

  constructor(private users: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      map((param) =>param.id),
      delay(4000),
      switchMap((id) => this.users.getUsers()),
      catchError(()=>{
        this.router.navigate([""]);
        return EMPTY;
      })
    );

  }

}
