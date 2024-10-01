import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MovieserviceService {
  constructor(private $httpclint:HttpClient) { }
  getTrending():Observable<any>{
   return this.$httpclint.get("https://dummyjson.com/products")
  }
}
