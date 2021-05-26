import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  private products = new Array<Product>();
  private titleCategory = 'Mercedes branch';
  panelOpenState = false;

  constructor(private api: ApiServiceService) {
    this.getProductsByCategory();
  }

  ngOnInit() {
  }


  /**
   * to get list products belongs to this category
   */
  getProductsByCategory = () => {
    // get the category ID from the route

    // fetch the data from the server

    // and that all

    // we use direct the same product list
    this.products = this.api.getProducts();

  }

}
