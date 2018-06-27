import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts'; 
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChartsComponent } from './charts/charts.component';
declare var require: any;
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);