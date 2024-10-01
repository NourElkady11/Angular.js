import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { emit } from 'process';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { log } from 'console';
import { jwtDecode } from 'jwt-decode';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // decodedData=null
  constructor(private _AuthService:AuthenticationService,private roter:Router){}
  
  LoginForm:FormGroup=new FormGroup({
    // name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9!@#-_$%^&*|]{3,10}/)]),
    // rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9!@#-_$%^&*|]{3,10}/)]),
    // phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  })


  Empty:boolean=false;
  isloading:boolean=false;
  apierror:String="";

  async handleLogin(LoginForm:FormGroup){
    this.isloading=true
    if(LoginForm.get("email")?.getError("required") || LoginForm.get("password")?.getError("required") ){
      this.Empty=true
    }
    else{
      this.Empty=false
    }
      if(this.Empty){
        alert("Enter the required inputs")
      }
      console.log(LoginForm);
      if(LoginForm.valid){
        this._AuthService.Login(LoginForm.value).subscribe({
          next:(response)=>{

            console.log(response);
            if(response.message==="success"){
              this.roter.navigate(["/home"])
            }
            localStorage.setItem("token",response.token);
            this._AuthService.decodeUser()
           
            
          },
          error:(err)=>{
            this.isloading=false;
            alert(err.error.errors.msg);
            this.apierror=err.error.errors.msg;      
            
          }

        })
    

      }
  }




}
