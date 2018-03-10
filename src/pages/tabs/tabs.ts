import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {LibaryPage} from "../libary/libary";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <!-- tabIcon ... star vind je in de lijst met ionic icons -->
      <ion-tab [root]="favoritesPage" tabTitle="Favorites"
               tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Libraries"
               tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibaryPage;
}
