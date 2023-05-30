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
import { FilterComponent } from './main/filter/filter.component';
import { LotsListComponent } from './main/lots-list/lots-list.component';
import { PagesComponent } from './main/pages/pages.component';
import { ErrorPathComponent } from './error-path/error-path.component';
import { PresentationComponent } from './lots/presentation/presentation.component';
import { CommentComponent } from './lots/comment/comment.component';

const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'lots/:idPath', component: LotsComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: ErrorPathComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LotsComponent,
    ShopComponent,
    AdminComponent,
    FilterComponent,
    LotsListComponent,
    PagesComponent,
    ErrorPathComponent,
    PresentationComponent,
    CommentComponent
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
