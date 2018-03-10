import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor( private quoteService: QuotesService,
               private modelCtrl: ModalController) {
  }
  ionViewWillEnter() {
    // Executed just before showing the page
    this.quotes = this.quoteService.getFavoriteQuotes();
  }
  onViewQuote( quote:Quote) {
    const modal = this.modelCtrl.create( QuotePage, quote);
    modal.present();
  }
}
