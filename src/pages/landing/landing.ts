import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import {LogInPage}from '../log-in/log-in';
import { PhpServerProvider} from '../../providers/php-server/php-server';
import 'rxjs/add/operator/map';


/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  revcenterlist:any;
//  rev;
list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToRegister(){
    this.navCtrl.push(RegistrationPage);
  }
goToLogIn(){
    this.navCtrl.push(LogInPage);
  }

}
