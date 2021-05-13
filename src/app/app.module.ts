import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './compsApi/app-main/app-main.component';
import { NavComponent } from './compsApi/nav/nav.component';
import { ListComponent } from './compsApi/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    NavComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 2 way biding -> ngModel-> מאפשר שישמוש ב
    FormsModule,
    //מאפשר יכולת לבקש איי פי איי של אנגולר
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
