import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _Httpclient:HttpClient,private roter:Router){
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token') !== null) {
      this.decodeUser();
    }
  }

  //? and this not   constructor(private _Auth:AuthenticationService)
  //! WHY WE MUST USE THE COMMING VARIBLE INSIDE A FUNCTION AND WE CANNOT USE IT IN THE GLOBAL
  UserData=new BehaviorSubject(null)
 
  decodeUser(){
    let incodedToken=JSON.stringify(localStorage.getItem("token"));
    let decodedData:any=jwtDecode(incodedToken);
    console.log(decodedData);
    this.UserData.next(decodedData)
  }
  logOut(){
    this.UserData.next(null);
    localStorage.removeItem("token");
    this.roter.navigate(["/login"])
  }


  
    register(UserData:Object):Observable<any>{
        return this._Httpclient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',UserData)
    }
    Login(UserData:Object):Observable<any>{
      return this._Httpclient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',UserData)
  }

}
