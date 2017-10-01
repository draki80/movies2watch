import { Component } from '@angular/core';

import { MovieListPage } from '../movieList/movieList';
import { PeoplePage } from '../people/people';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MovieListPage;
  tab3Root = PeoplePage;

  constructor() {

  }
}
