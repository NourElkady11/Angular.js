import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  animations: [
    trigger('slideFade', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('500ms ease', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})

export class ProductDetailsComponent implements OnInit {
  id:any
  constructor(private _Activated:ActivatedRoute,private _productservice:ProductsService ){
    this._Activated.paramMap.subscribe((params)=>{
      console.log(params.get("id"));
      this.id=params.get("id");
      
    })
  }
  productDetails:any;
  ngOnInit(): void {
    this._productservice.getsingleproduct(this.id).subscribe({
      next:(resp)=>{
        console.log(resp.data);
        this.productDetails=resp.data
            
      }
    })

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }


}
