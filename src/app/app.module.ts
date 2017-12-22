import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';
import { AppComponent } from './app.component';
import { appService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,DataTableModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
