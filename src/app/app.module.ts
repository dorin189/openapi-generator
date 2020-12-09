import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from 'openapi-generator/api.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PeopleService } from 'openapi-generator/api/people.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
