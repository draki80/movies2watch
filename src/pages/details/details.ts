import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ToastController, ModalController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MoviesProvider } from '../../providers/movies/movies';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  details: any;
  myColor: string = 'primary';
  origin : string;

  constructor(public view: ViewController,
              public navParams: NavParams,
              private storage: Storage,
              private toastCtrl: ToastController,
              private modal: ModalController,
              public moviesProvider: MoviesProvider
            ) {
    this.details = navParams.get('item');
    this.origin = navParams.get('origin');
    this.setCastArray();
  }

  closeModal(){
    this.view.dismiss();
  }

  setData(data){

    this.storage.set(data.id.toString(), data).then((val)=>{
      this.myColor = 'secondary';
      this.presentAddedToast(data.title);

      this.view.dismiss();
    });
  }

  presentAddedToast(title) {
    let toast = this.toastCtrl.create({
      message: title + ` added to your list!`,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  presentRemovedToast(title) {
    let toast = this.toastCtrl.create({
      message: title + ` removed from your list!`,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  setCastArray(){
    this.details.casts.cast.splice(9);
  }

  removeFromList(item){

    this.storage.remove(item.id.toString()).then((val) => {

      this.presentRemovedToast(item.title);
      this.view.dismiss();
    });
  }

  openDetailesModal(item) {
    this.moviesProvider.getPersonDetails(item)
      .then(data => {
        console.log("izlaz",data);
          let detailsModal =  this.modal.create('PeopleDetailsPage', {item: data});
          detailsModal.present();
      })
  }

}
