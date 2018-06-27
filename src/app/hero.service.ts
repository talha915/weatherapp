import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetails } from './Details';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url="https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json";
  // private url = "../assets/Data/details.json";
  constructor(private Http: HttpClient) { }

  // getDetails(): Observable <IDetails[]> {
  //   return this.Http.get<IDetails[]>(this.url);
  // }
  getDetails(): Observable <IDetails[]>{
    return this.Http.get <IDetails[]>(this.url);
  }
}
