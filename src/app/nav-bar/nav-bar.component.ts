import { Component, OnInit } from '@angular/core';
import {Notification} from '../model/notification';
import { Category } from '../model/category';
import {Router} from '@angular/router';
import {ActionHandlerService} from '../services/action-handler.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private categoryList = new Array<Category>();
  private valueBag = 0;

  constructor(private router: Router, private actionService: ActionHandlerService) {

   }

  ngOnInit() {
       // init the menu
       this.getCategoryList();
       this.actionService.currentMessage.subscribe( (value => { this.valueBag = value; }));
  }

   /**
   * get list Category from service layer
   */
  public getCategoryList = () => {
    // call the service layer then invok the proper method

    // in this case we gonna just use dumy data to test the application
    const c1 = new Category(1, 'Computer', 'desktop_mac');
    const c2 = new Category(2, 'Computer', 'desktop_mac');
    const c3 = new Category(3, 'Computer', 'desktop_mac');
    const c4 = new Category(4, 'Computer', 'desktop_mac');
    const c5 = new Category(5, 'Computer', 'desktop_mac');

    this.categoryList.push(c1);
    this.categoryList.push(c2);
    this.categoryList.push(c3);
    this.categoryList.push(c4);
    this.categoryList.push(c5);

  }


  /**
   * to navigate to proper Category
   */
  public goToCategory = (id) => {
    console.log(id);
    this.router.navigate(['/category', id]);
  }

}
