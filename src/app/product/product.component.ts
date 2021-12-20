import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  photoId=0;
  productId=0;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      
      this.photoId=params.photoId;
      this.productId=params.productId;
    })
  }

  ngOnInit(): void {
  }

}
