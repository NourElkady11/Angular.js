import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from './home/homecomp';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PhoneComponent } from './phone/phone.component';
import { FirstserviceService } from './firstservice.service';
import { MovieserviceService } from './movieservice.service';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './authentication.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    PhoneComponent,
    SignupComponent,
    SliderComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    ProductsComponent,
    LoginComponent,
    LogoutComponent,
    WelcomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FirstserviceService,
    MovieserviceService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
