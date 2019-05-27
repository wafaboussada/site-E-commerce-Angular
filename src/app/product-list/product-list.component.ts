import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from './mock-product';
import { Product } from './product';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts()
    // this.products = PRODUCTS;
    // this.name = this.route.snapshot.params['id'];
  }
  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products)
  }

  selectProduct(product: Product) {
    let link = ['/productDetails', product.id];
    this.router.navigate(link);
  }

  addProduct(id: number) {
    console.log('hello');
    let link = ['/cart'];
    this.router.navigate(link);
    for (let i=0;i<=this.products.length;i++){
      if (this.products[i].id === id ){
        console.log(this.products[i])
        return this.products[i]}
    }
  }

}
