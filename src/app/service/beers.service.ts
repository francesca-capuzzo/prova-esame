import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../model/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  BEER_API = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getBeers(){
    return this.http.get<Beer[]>(this.BEER_API);
  }

  getBeerById(id: any) {
    return this.http.get(this.BEER_API + '/' + id);
  }

}
