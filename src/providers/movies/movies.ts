import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesProvider {
  data: any[];

  constructor(public http: Http) {

  }

  getSearchData(data) {
    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/search/'+ data.type + '?query=' + data.title + '&api_key=182b614bc558d8f3f9972698dc46d583&sort_by=popularity.desc').map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }


  getMovieDetails(data){
    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/movie/'+ data.id + '?api_key=182b614bc558d8f3f9972698dc46d583&append_to_response=casts').map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPersonDetails(object){
    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/person/'+ object.id + '?api_key=182b614bc558d8f3f9972698dc46d583&append_to_response=images%2Ccombined_credits').map(res => res.json())
        .subscribe(data => {
          console.log("in provider", object);
          data.known_for = object.known_for;
          resolve(data);
        });
    });
  }

  getMovies(select){
    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/movie/'+ select + '?api_key=182b614bc558d8f3f9972698dc46d583').map(res => res.json())
        .subscribe(data => {
          resolve(data.results);
        });
    });
  }

  getPeopleDetails(segmentValue){
    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/person/'+ segmentValue + '?api_key=182b614bc558d8f3f9972698dc46d583').map(res => res.json())
        .subscribe(data => {
          resolve(data.results);
        });
    });
  }


}
