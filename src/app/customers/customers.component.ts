import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  users:any;
  add:any;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

       this.usersService.getUsers().subscribe(data=> {
        console.log(data);
        this.users = data;
        }, err => {

          console.log("unable to ger data from url" +err);

       
        } )
  }

}
