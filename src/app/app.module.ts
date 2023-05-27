import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { LotsComponent } from './lots/lots.component';
import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'lots', component: LotsComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LotsComponent,
    ShopComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
