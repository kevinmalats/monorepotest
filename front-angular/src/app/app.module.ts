import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth_service';
import { HttpCustomer } from '../gateway/httpCustomer';
import { StorageService } from './services/storage_service';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers:[AuthService, HttpCustomer, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
