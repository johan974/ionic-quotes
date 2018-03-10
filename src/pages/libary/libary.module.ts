import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibaryPage } from './libary';

@NgModule({
  declarations: [
    LibaryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibaryPage),
  ],
})
export class LibaryPageModule {}
