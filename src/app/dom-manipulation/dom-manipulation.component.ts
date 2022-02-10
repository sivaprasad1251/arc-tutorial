import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.scss']
})
export class DomManipulationComponent implements OnInit {

  adminRole: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
