import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { MoviesProvider } from '../../providers/movies/movies';

@IonicPage()
@Component({
  selector: 'page-people-details',
  templateUrl: 'people-details.html',
})
export class PeopleDetailsPage {
  details: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController,
              public moviesProvider: MoviesProvider,
              private modal: ModalController) {

              this.details = navParams.get('item');
              this.removeWithoutImages(this.details);
              console.log("people", this.details);
  }

  closeModal(){
    this.view.dismiss();
  }

  removeWithoutImages(data){
    data.combined_credits.cast.forEach(function (object, i) {
      if (object.poster_path == null){
        object.poster_path= "img/NoImage.jpg";
      }
    });
  }

  openDetailesModal(item) {
    this.moviesProvider.getMovieDetails(item)
      .then(data => {

          let detailsModal =  this.modal.create('DetailsPage', {item: data});
          detailsModal.present();
      })
  }


}
