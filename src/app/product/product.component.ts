import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../product-list/mock-product';
import { Product } from '../product-list/product';
import { Router } from '@angular/router';
import { ProductService } from '../product-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.products = PRODUCTS;
  }

  editProduct(product: Product){
    console.log('produit modifié',product.name);
  }
  // deleteProduct(product: Product) {
  //   console.log('produit supprimé',product.name);
  // }

  // addProducttoCategory(){
  //   let link = ['/addProduct'];
  //   this.router.navigate(link);
  // }
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
