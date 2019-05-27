import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../product-list/mock-product';
import { Product } from '../product-list/product';
import { ProductService } from '../product-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product
    })
    // this.products = PRODUCTS;
  }
}
