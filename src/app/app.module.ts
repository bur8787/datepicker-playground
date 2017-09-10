import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { ja } from 'ngx-bootstrap/locale';
defineLocale('ja', ja);

import {AppComponent} from './app.component';

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, BsDatepickerModule.forRoot(), DatepickerModule.forRoot(), BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
