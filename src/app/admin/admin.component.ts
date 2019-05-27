import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../product-list/mock-product';
import { Product } from '../product-list//product';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    product: Product;
  }

  modifProduct(){
    console.log('produit modifié')
  }
  deleteProduct(product: Product) {
    // console.log('produit supprimé')
    this.productService.deleteProduct(product)
    .subscribe (
      response => {
     const link =['admin'];
     this.router.navigate(link);
     this.productService.getProducts;}
    )
  }
}
