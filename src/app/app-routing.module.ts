import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/homecomp';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PhoneComponent } from './phone/phone.component';
import { SignupComponent } from './signup/signup.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './authguard.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {path:'',redirectTo:"welcome", pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:homeComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"categories",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"products",canActivate:[AuthGuard],component:ProductsComponent},
  {path:"cart",canActivate:[AuthGuard],component:CartComponent},
  {path:"brands",canActivate:[AuthGuard],component:BrandsComponent},
  {path:"productDetails/:id",canActivate:[AuthGuard],component:ProductDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:SignupComponent},
  {path:"logout",canActivate:[AuthGuard],component:LogoutComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"foooter",component:FooterComponent},
  {path:"**",component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
