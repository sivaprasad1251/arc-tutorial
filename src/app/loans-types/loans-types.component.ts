import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans-types',
  templateUrl: './loans-types.component.html',
  styleUrls: ['./loans-types.component.scss']
})
export class LoansTypesComponent implements OnInit{

  /*addLoanTypesForm = new FormGroup({
    'loanName' : new FormControl(),
    'loanType' : new FormControl(),
    'loanDescription' : new FormControl(),
  })*/

  constructor(private fb : FormBuilder) { }

  trackLoanName() { //reactive forms value changes .in html keyup or blur
   //we can also write it in ngOnInit,so we need not to write& trigger trackLoanName manually
    
    /*this.addLoanTypesForm.valueChanges.subscribe(data => {
      console.log(data);
    })*/
    this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe(data => {
      console.log("value changes",data);
    })
   //here valueChanges & statusChanges return observable so we have to use subscribe
    //reactive forms state changes
    this.addLoanTypesForm.statusChanges.subscribe(data => {
      console.log("status changes",data);
    })

  }

  ngOnInit(): void {
    


  }

  /*addLoanTypesForm = this.fb.group({ //setting Values while instance creation
    'loanName' : new FormControl('siva loan'),
    'loanType' : new FormControl('personal loan'),
    'loanDescription' : new FormControl('something for loan application'),
  })*/

  



  addLoanTypesForm = this.fb.group({
    //first parameter for formcontrolvalue,next parameter for validators
    'loanName' : new FormControl('', [
      Validators.required,
      Validators.minLength(10), 
      Validators.maxLength(20)
    ]
    ),  
    'loanType' : new FormControl('',Validators.required),
    //we can also use validators.compose
    'loanDescription' : new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(10), 
      Validators.maxLength(20)
    ])),
    //FormArray creation //creation of formcontrol in form array
    /*'users': new FormArray([
      new FormControl('ARC'),
      new FormControl('Tutorials')
    ])*/
    'users': new FormArray([  // creation of formgroup in form array
      this.fb.group({
        'name' : new FormControl(''),
        'age' : new FormControl(''),
        'dept' : new FormControl('')
      
      })
    ])
  })

  settingValues(){  //setting values through object .recommended one
    const newLoanObj = {//actually setting values done in ngOnInit because it loads in component loading time
    'loanName' : 'siva loan',
    'loanType' : 'personal loan',
    'loanDescription' : 'something for loan application',
  }

  this.addLoanTypesForm.setValue(newLoanObj);// you need to pass all values
  //this.addLoanTypesForm.patchValue(newLoanObj); // you need not to pass all values

  }


  get users(): FormArray{ //we can use this method to reduce code of addUser method
    return this.addLoanTypesForm.get('users') as FormArray;

  }

  
 //creating dynamic formArray to add or remove form groups or controls
 addUser(){
   let userArray= this.addLoanTypesForm.get('users') as FormArray; //simply we can put here this.users
   let newUser = this.fb.group({
     'name' : '',
     'age' :'',
     'dept' :''
   })
   userArray.push(newUser);
 }

 removeUser(i){
   let arr = this.addLoanTypesForm.get('users') as FormArray;
   arr.removeAt(i);
 }

 //assigning dept based on age
 assignDept(i){
   let arr = this.addLoanTypesForm.get('users') as FormArray;

   if(arr.value[i].age<20){
      arr.value[i].dept="CSE";
   }else{
     arr.value[i].dept="ECE";
   }
   this.users.setValue(arr.value);
 }
  

 addLoanType() {
   /*
   get entire form in one go- this.addLoanTypesForm..value
   get a specific form control-this.addLoanTypesForm.get('loanName').value
   get data when value changes - subscribe
    */

  console.log(this.addLoanTypesForm.value);
  console.log(this.addLoanTypesForm.get('loanName')?.value); 

  this.addLoanTypesForm.valueChanges.subscribe(data => {
    console.log(data);

  })

  //form states information 
  console.log(this.addLoanTypesForm.valid); // return true or false
  console.log(this.addLoanTypesForm.invalid);
  console.log(this.addLoanTypesForm.pending);
  console.log(this.addLoanTypesForm.pristine);
  console.log(this.addLoanTypesForm.dirty);
  console.log(this.addLoanTypesForm.touched);
  console.log(this.addLoanTypesForm.untouched);

  //we can do some operations using form states like 
   if(this.addLoanTypesForm.valid){
   }

 }

 resetForm(){
   this.addLoanTypesForm.reset();
 }

}
