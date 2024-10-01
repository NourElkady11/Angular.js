import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',]
})
export class NavbarComponent implements OnInit {
  isNavbarActive = false;
  isSearchOpen: boolean = false;
  issmallscreen: boolean = false;
  windowWidth: number = 0;
  isLogin:boolean=false;
  constructor(private _Auth:AuthenticationService){
    _Auth.UserData.subscribe({
      next:()=>{
        if(_Auth.UserData.getValue()!==null){
          this.isLogin=true
        }
        else{
          this.isLogin=false
        }
      }
    })
  }
  Calllogout(){
    this._Auth.logOut()
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.checkScreenSize();
  }
  ngOnInit(){
    if(typeof window !=="undefined"){
      this.windowWidth = window.innerWidth;
      this.checkScreenSize();
    }
  }
  checkScreenSize()
  {
    if(this.windowWidth < 700){
      return this.issmallscreen = true;
    }
    else
    {
      return this.issmallscreen = false;
    }
  }
  toggleNavbar(){
    this.isNavbarActive = !this.isNavbarActive;
  }
  toggleSearch(){
      this.isSearchOpen = !this.isSearchOpen;
  }
}