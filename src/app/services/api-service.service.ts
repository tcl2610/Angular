import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  /**
   * Dumy Data to Test
   */

   private products = [
     {
       id: 1,
       title: 'Acer R3',
       rating: 4,
       desc:  'This dumy data to test the product works',
       price: 8000,
       image: '../../assets/aspire.png',
       listImages: [
         '../../assets/aspire.png',
         '../../assets/aspire.png',
         '../../assets/aspire.png',
         '../../assets/aspire.png'
        ]
     },
     {
      id: 2,
      title: 'Acer R3',
       rating: 4,
      desc:  'This dumy data to test the product works',
      price: 8000,
      image: '../../assets/aspire.png',
      listImages: [
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png'
       ]
    },
    {
      id: 3,
      title: 'Acer R3',
      rating: 4,
      desc:  'This dumy data to test the product works',
      price: 8000,
      image: '../../assets/aspire.png',
      listImages: [
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png'
       ]
    },
    {
      id: 4,
      title: 'Acer R3',
      rating: 4,
      desc:  'This dumy data to test the product works',
      price: 8000,
      image: '../../assets/aspire.png',
      listImages: [
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png',
        '../../assets/aspire.png'
       ]
    }
   ];



  constructor() { }
  /**
   * To fetch the Products from the Server Side
   * we need to inject it to the proper component
   */
  getProducts = () => {
    return this.products;
  }

  /**
   * To Sign In the users
   */
  signIn = () => {

  }

  /**
   * To Sign Up the users
   */
  signUp = () => {

  }


}
