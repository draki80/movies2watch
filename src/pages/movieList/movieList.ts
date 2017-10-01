import { Component } from '@angular/core';
import { NavController, AlertController, ModalController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'movieList.html'
})
export class MovieListPage {

  list:any[];

  constructor(public navCtrl: NavController,
              private storage: Storage,
              private alertCtrl: AlertController,
              private modal: ModalController
            ) {
              this.getDataFromStorage();
  }

  ionViewWillEnter(){
    this.getDataFromStorage();
  }

  removeFromList(item){
    this.storage.remove(item.id.toString()).then((val) => {
  });
  }

  getDataFromStorage(){
    var arr = [];

    this.storage.forEach( (value, key, index) => {
      arr.push(value);
    });
    this.list = arr.reverse();
  }

  openDetailesModal(item) {
    let detailsModal =  this.modal.create('DetailsPage', {item: item, origin:"movieList"});
    detailsModal.present();
    detailsModal.onDidDismiss(() => {
      this.getDataFromStorage();
      });
    }
  }
