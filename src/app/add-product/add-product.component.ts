import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  id: number;
  myForm: FormGroup

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.product = new Product(this.id,'',0,false,'','',new Date());
    this.myForm = this.formBuilder.group({
      name: [''],
      price: [''],
      category: [''],
      disponibility:['']
    })
  }

  save (model: any) {
    this.productService.addProduct(this.product)
    .subscribe (
      data => {
        console.log(data);
        this.router.navigate(['admin']);
      }
    )
  }

}
