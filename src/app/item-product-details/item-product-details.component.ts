import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {ActionHandlerService} from '../services/action-handler.service';

@Component({
  selector: 'app-item-product-details',
  templateUrl: './item-product-details.component.html',
  styleUrls: ['./item-product-details.component.scss']
})
export class ItemProductDetailsComponent implements OnInit {

  private listImageProduct = new Array<string>();
  private wishList = new Array<Product>();
  private quntityValue = 1;
  private currentProduct: Product;
  private imageTest = '../../assets/aspire.png';


  constructor(private actionHandler: ActionHandlerService) { }

  ngOnInit() {
    this.listImageProduct.push(this.imageTest);
  }


  /**
   * to call the service layer to get the details info of current item product
   */
  getProductDetails = () => {
    // just i will use dumy data to test

    // by using the id of the product we fetch all its details

    // use its id to add it to the wishList
  }

  /**
   * handle value by increase 1
   */
  increase = () => {
    this.quntityValue = this.quntityValue + 1;
    console.log(this.quntityValue);
    // update the GUI
  }

  /**
   * handle value by decrease 1
   */
  decrease = () => {
    if (this.quntityValue > 1) {
    this.quntityValue = this.quntityValue - 1;
    console.log(this.quntityValue);
    // update the GUI
    }
  };

  /**
   * to add the current item to The BAG
   */
  addToBag = () => {
    // add to list wish list

    // update the badge icon number

    // put it into a global store or pass it to the proper component

    // send product id
    this.actionHandler.onAddItemToBag(1);
  }

}
