import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId:10,firstName:'raj',lastName:'kumar'},
    {clientId:10,firstName:'raj',lastName:'kumar'},
    {clientId:10,firstName:'raj',lastName:'kumar'},
    {clientId:10,firstName:'raj',lastName:'kumar'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
