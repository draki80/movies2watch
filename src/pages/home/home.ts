import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value: {title: string, type: string} = {title: "", type: "movie"};
  movieList:any;
  segment:string = "popular";

  constructor(public navCtrl: NavController,
              public moviesProvider: MoviesProvider,
              private storage: Storage,
              private modal: ModalController) {
                this.getApiData();
  }

  searchForMovies(){
    this.moviesProvider.getSearchData(this.value)
    .then(data =>{
      this.segment = "";
      this.removeWithoutImages(data);
      this.movieList = data;
    })
  }

  openDetailesModal(item) {
    this.moviesProvider.getMovieDetails(item)
      .then(data => {
          let detailsModal =  this.modal.create('DetailsPage', {item: data});
          detailsModal.present();
      })
  }

  getApiData() {
    this.moviesProvider.getMovies(this.segment)
      .then(data => {
        this.movieList = data;
      })
  }

  removeWithoutImages(data){
    for(var i = 0; i < data.length; i++){
      if(data[i].poster_path == null){
        data.splice(i, 1);
      }
    }
  }

}
