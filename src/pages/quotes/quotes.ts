import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements  OnInit {
  quotesGroup : { category: string, quotes: Quote[], icon: string};

  constructor(private alertCtrl: AlertController, private navParams: NavParams,
              private quoteService: QuotesService) { }

  ngOnInit() {
    this.quotesGroup = this.navParams.data;
  }

  onAddFavorite( quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure to add the Quute?',
      buttons: [
        {
          text: 'YES',
          handler: () => {
            this.quoteService.addQuoteToFavorites( quote);
          }
        },
        {
          text: 'NO!',
          role: 'cancel',
          handler: () => {
            console.log('OK!!!')
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites( quote: Quote) {
    this.quoteService.removeQuoteFromFavorites( quote);
  }

  isFavorite( quote: Quote) {
    return this.quoteService.isQuoteFavorite( quote);
  }
}
