import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './homecomp.html',
  styleUrls: ['./homecomp.css']
})

export class homeComponent implements OnInit{
  constructor(private productservice:ProductsService){

  }
  products:any[]=[]
  ngOnInit(): void {
    this.productservice.getProducts().subscribe({
      next:(resp)=>{
          this.products=resp.data
      }
    
      
    });
    console.log("products"+this.products);
  }
  title = 'First-angular-project';
  username:string="ahmed";
  imgsrc:string="./assets/images/Background.png";
  width:number=100;
  x:number=100;
  onsale:boolean=false;
 users:User[]=[
  {id:0,name:"nour",age:30,address:"mokattam"},
  {id:0,name:"nour",age:30,address:"mokattam"},
  {id:0,name:"nour",age:30,address:"mokattam"},
  {id:0,name:"nour",age:30,address:"mokattam"},
  {id:0,name:"nour",age:30,address:"mokattam"},
  {id:0,name:"nour",age:30,address:"mokattam"},
 ]


  welcome(){
     window.alert("welcomeee")
  }
  check(z:number):boolean | void{
    if(z>3){
      return true
    }
  }

}



//binding 
