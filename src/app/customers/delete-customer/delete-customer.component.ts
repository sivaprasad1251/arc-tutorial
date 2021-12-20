import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  isDeleted = false;

  ngOnInit(): void {
  }

  deleteUser(){
    this.usersService.deleteUser(1).subscribe(data=>{
      this.isDeleted= true;
      console.log("user deleted successfully"+ data);
    },(err)=>{
      console.log("operaion not successful" + err);
    })
  }

}
