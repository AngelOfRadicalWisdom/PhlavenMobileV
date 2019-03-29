import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DiagnosticexamPage}from '../diagnosticexam/diagnosticexam';

/**
 * Generated class for the TakediagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-takediag',
  templateUrl: 'takediag.html',
})
export class TakediagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakediagPage');
  }
goToDiag(){
   this.navCtrl.push(DiagnosticexamPage);
  //console.log("hello"  );
}
}
