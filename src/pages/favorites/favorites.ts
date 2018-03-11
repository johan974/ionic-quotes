import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor( private quoteService: QuotesService,
               private modelCtrl: ModalController,
               private settingsService: SettingsService) {
  }
  ionViewWillEnter() {
    // Executed just before showing the page
    this.quotes = this.quoteService.getFavoriteQuotes();
  }
  onViewQuote( quote:Quote) {
    const modal = this.modelCtrl.create( QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if( remove == true) {
        this.quoteService.removeQuoteFromFavorites(quote);
        // REFRESH is needed !!
        this.quotes = this.quoteService.getFavoriteQuotes();
        // alternatief:
        // const position = this.quotes.findIndex((quoteEl:Quote) => {
        //   return quoteEl.id == quote.id;
        // });
        // this.quotes.splice( position, 1);
      }
    });
  }
  onRemoveFromFavorites( quote: Quote) {
    this.quoteService.removeQuoteFromFavorites( quote);
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  // onOpenMenu() {
  //   this.menuCtrl.open();
  // }
  getBackground() {
    const bg = this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    console.log( 'GetBackground: ' + bg);
    return bg;
  }
}
