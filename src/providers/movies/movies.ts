import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MoviesProvider {

  constructor(public http: Http) {
    console.log('Hello MoviesProvider Provider');
  }

  getMovieSearchData(){
    this.http.get('https://api.themoviedb.org/3/search/movie?query=terminator&api_key=182b614bc558d8f3f9972698dc46d583').subscribe(data => {
      console.log(data);
    });
  }

}
