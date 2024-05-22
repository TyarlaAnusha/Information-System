import { Component, OnInit } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-otypes',
  templateUrl: './otypes.component.html',
  styleUrls: ['./otypes.component.css']
})
export class OtypesComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  products:any;

  //  = [1,2,3,4,5]

  GetProducts() {
    return this.productService.GetProducts().subscribe((response: {}) => {
      let data: any = response;
      console.log(data);
      this.products = data;
    });
  } 

}
