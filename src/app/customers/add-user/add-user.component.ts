import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { componentDeactivateInterface } from '../can-deactivate.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit,componentDeactivateInterface {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      name: [''],
      email: [''],
    })
  }
  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  ngOnInit(): void {
  }

}
