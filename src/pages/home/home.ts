import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any[];
  constructor(public navCtrl: NavController, public movies: MoviesProvider) {
    this.items = [];
    for (let i = 0; i < 10; i++){
      this.items.push({
        text: 'Item' + i,
        id: i
      });
    }
  }
itemSelected(item) {
  this.navCtrl.push(DetailsPage, {
    item: item
  })
}

ionViewDidLoad(){
  this.movies.getMovieSearchData();
}


}
