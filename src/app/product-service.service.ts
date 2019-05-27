import { Product } from './product-list/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {

   constructor(private http: HttpClient){}

   private productsUrl = 'api/products';

   private log(log: string) {
    console.info(log);
   }

   private handleError<T>(operation='operation', result?: T) {
     return (error: any): Observable<T> => {
       console.log(error);
       console.log(`${operation} failed: ${error.message}`);
       return   of(result as T);
     };

   }

    // Retourne tous les produits
    getProducts(): Observable <Product[]> {
       return this.http.get<Product[]>(this.productsUrl).pipe(
        tap(_ => this.log(`fetched products`)),
        catchError(this.handleError(`getProducts`, []))
        );
    }

    // Retourne le produit avec l'identifiant passé en paramètre
    getProduct(id: number): Observable <Product> {
      const url = `${this.productsUrl}/${id}`;
      return this.http.get<Product>(url).pipe(
        tap(_ => this.log(`fetched product id=${id}`)),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
    }




    addProduct(product: Product): Observable<Product> {
      const httpOptions = {
        headers: new HttpHeaders({ 'content-Type': 'application/json'})
      };
      product.id = null;
      return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('add product'))
      );
  }


    deleteProduct(product: Product): Observable<Product> {
      const url = `${this.productsUrl}/${product.id}`;
      const httpOptions = {
        headers: new HttpHeaders({ 'content-Type': 'application/json'})
      };
      return this.http.delete<Product>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted product id=${product.id}`)),
        catchError(this.handleError<any>('delete product'))
      );
    }

    updateProduct(product: Product): Observable<Product> {
      const httpOptions = {
        headers: new HttpHeaders({ 'content-Type': 'application/json'})
      };
      const url = `${this.productsUrl}/${product.id}`;
      return this.http.put(url, product, httpOptions).pipe(
        tap(_ => this.log(`updated product id=${product.id}`)),
        catchError(this.handleError<any>('updated product'))
      );
    }

}
