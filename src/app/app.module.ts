import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru-RU');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ProductsComponent } from './components/pages/products/products.component';
import {ProductService} from "./components/common/services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { TruncPipe } from './components/common/pipes/trunc.pipe';
import { ProductComponent } from './components/pages/product/product.component';
import {registerLocaleData} from "@angular/common";
import { OrderComponent } from './components/pages/order/order.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    ProductsComponent,
    TruncPipe,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-RU'},
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
