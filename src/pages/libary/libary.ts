import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";

@IonicPage()
@Component({
  selector: 'page-libary',
  templateUrl: 'libary.html',
})
export class LibaryPage {
  quoteCollection: { category:string, quote:Quote, icon:string}[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
