import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  value: {title: string, type: string} = {title: "", type: "person"};
  peopleList: any;
  segment: string = "popular";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public moviesProvider: MoviesProvider,
              private modal: ModalController) {
              this.getApiData();
  }

getSearchData(){
  this.moviesProvider.getSearchData(this.value)
  .then(data =>{
    this.removeWithoutImages(data);
    this.segment = "";
    this.peopleList = data;
  })
}

getApiData() {
  this.moviesProvider.getPeopleDetails(this.segment)
    .then(data => {
      console.log(data);
      this.peopleList = data;
    })
}

openDetailesModal(item) {
  this.moviesProvider.getPersonDetails(item)
    .then(data => {
      console.log("izlaz",data);

        let detailsModal =  this.modal.create('PeopleDetailsPage', {item: data});
        detailsModal.present();
    })
}

removeWithoutImages(data){
  data.forEach(function (object, i) {
    if (object.profile_path == undefined){
      object.profile_path= "img/NoImage.jpg";
    }
  });
}


}
