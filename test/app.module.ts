import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2TabModule }  from 'ng2-tab';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2TabModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }