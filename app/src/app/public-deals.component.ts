/**
 * Created by SabriH on 2016-09-30.
 */
import {Component, OnInit} from '@angular/core';
import {Deal} from './deal';

import {AuthService} from './auth.service';
import {DealService} from './deal.service';

@Component({
  selector: 'public-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: 'public-deals.component.html',
  styleUrls: ['public-deals.component.css']
})

export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];


  constructor(
    private dealService: DealService,
    private authService: AuthService) {
  }
  ngOnInit(): void{
    this.dealService.getPublicDeals()
      .then(deals => this.publicDeals = deals);
  }
  purchase(item){
    alert('You bought the:' + item.name);
  }
}
