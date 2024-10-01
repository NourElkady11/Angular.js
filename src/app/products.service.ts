import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _Httpclient:HttpClient) { }
  getProducts():Observable<any>{
    return this._Httpclient.get("https://route-ecommerce.onrender.com/api/v1/products")
  }
  getsingleproduct(id:string):Observable<any>{
    return this._Httpclient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)

  }

}
