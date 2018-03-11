import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

@IonicPage()
@Component({
  selector: 'page-libary',
  templateUrl: 'libary.html',
})
export class LibaryPage implements  OnInit{
  quoteCollection: { category:string, quotes:Quote[], icon:string}[] = [];
  quotesPage = QuotesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
