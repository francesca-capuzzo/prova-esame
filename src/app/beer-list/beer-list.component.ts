import { Component, OnInit } from '@angular/core';
import { Beer } from '../model/beer';
import { BeersService } from '../service/beers.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [];
  beerDetail!: Beer;
  expand: boolean = false;
  ObjectKeys = Object.keys;

  constructor(private beerService: BeersService) { }

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((data: Beer[]) => {
      this.beers = data;
    })
  }

  getBeerDetails(itemId: any) {
    this.beerService.getBeerById(itemId).subscribe((data: any) => {
      this.beerDetail = data;
      this.expand = !this.expand;
    })
  }

  // getBeerDetails(event: any, itemId: number) {
  //   if (event) {
  //     let target = event.target || event.srcElement || event.currentTarget;
  //   let idAttr = target.attributes.id;
  //   console.log(idAttr);
      
  //     this.beerService.getBeerById(itemId).subscribe((data: any) => {
  //       this.beerDetail = data;
  //       this.expand = !this.expand;
  //   })
  // }
//}
  

}
