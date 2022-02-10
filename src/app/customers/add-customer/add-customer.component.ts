import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { componentDeactivateInterface } from '../can-deactivate.interface';
 

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit,componentDeactivateInterface {

  firstname: string='';
  terms: boolean=false;
  customerType: string='';
  description: string='';
  isUserCreated= false;
  addCustomerForm:any;

  constructor(private usersService : UsersService) { }
  isDataSaved(): boolean {
    return this.addCustomerForm.dirty;
  }

  ngOnInit(): void {




  }

  settingValues(formValue: NgForm){
    let valueObject={

      firstname:'SIVA HARI PRASAD',
      terms:true,
      customerType:'2',
      description:'this is set values in forms'
    };
    formValue.setValue(valueObject);

  }





addCustomer(formValue: NgForm): void {
  console.log(formValue.value);
  //validations 
  //data processing
  //then call API to save this data
  const postBody ={
    title: formValue.value.firstname,
    body: formValue.value.description
  }
  
  this.usersService.addUser(postBody).subscribe(data => {
    this.isUserCreated = true;
    console.log(data);
  },(err) => {
    console.log("unable to add user",err);
  })
}

resetForm(formValue: NgForm): void {
  formValue.reset();
  //formValue.resetForm();
}

}
