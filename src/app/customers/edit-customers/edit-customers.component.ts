import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    
  }


  updateUser(){
    this.usersService.updateUser().subscribe(data=> {
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
}
