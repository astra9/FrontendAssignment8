import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpDataSource, URL } from "./model/http.datasource";
import { MenuRepo } from './model/menu.repository.model'; 
import { SiIterativeDirective } from './directives/foundItems.directive';
import { NarrowItDown } from './controller/narrowItDown.component';

@NgModule({
  declarations: [
    AppComponent, SiIterativeDirective, NarrowItDown
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpDataSource, MenuRepo,  {
    provide: URL, 
    useValue: "https://davids-restaurant.herokuapp.com/menu_items.json"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
