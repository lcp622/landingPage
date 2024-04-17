import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _https = inject(HttpClient);
  private urlBase : string = "https://fakestoreapi.com/products"

getProducts() : Observable<IProduct[]>{
  return this._https.get<IProduct[]>(this.urlBase);
}

getProductsbyId(id: number) : Observable<IProduct>{

  return this._https.get<IProduct>(`${this.urlBase}/${id}`);
}
}
