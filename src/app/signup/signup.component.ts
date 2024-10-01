import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { emit } from 'process';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { log } from 'console';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  constructor(private _AuthService:AuthenticationService,private roter:Router){}
  
  RegisterForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9!@#-_$%^&*|]{3,10}/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9!@#-_$%^&*|]{3,10}/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  })

  Empty:boolean=false
  isloading:boolean=false
  apierror:String=""
  async handlesubmit(RegisterForm:FormGroup){
    this.isloading=true
    if(RegisterForm.get("name")?.getError("required") || RegisterForm.get("email")?.getError("required") || RegisterForm.get("password")?.getError("required") || RegisterForm.get("rePassword")?.getError("required") || RegisterForm.get("phone")?.getError("required")     ){
      this.Empty=true
    }
    else{
      this.Empty=false
    }
      if(this.Empty){
        alert("Enter the required inputs")
      }
      console.log(RegisterForm);
      if(RegisterForm.valid){
        this._AuthService.register(RegisterForm.value).subscribe({
          next:(response)=>{

            console.log(response);
            if(response.message==="success"){
              this.roter.navigate(["/login"])
            }
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
