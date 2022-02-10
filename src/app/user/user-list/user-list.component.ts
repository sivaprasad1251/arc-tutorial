import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users$= this.users.getUsers();
    console.log(this.users$);
  }

}
