import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../../Models/Credentials.model';
import { Http } from '@angular/http';
import { RegistrationPage } from '../registration/registration';
import 'rxjs/add/operator/map';
import { PhpServerProvider } from '../../providers/php-server/php-server';
import {HomePage}from '../home/home';


/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

Credentials={} as Credentials;
  responseData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  // takeLesson() {
  //   console.log(`Username: ${this.username}`);
  //   console.log(`Password: ${this.password}`);
  //   this.http.post('http://localhost:8000/login/confirm', { username: this.username, password: this.password} ).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  login(){
    this.PhpServer.login(this.Credentials,'m/login/mobileconfirm').then((result) => {
       //this.responseData=data;
       this.responseData = JSON.stringify(result);
       console.log(this.responseData);
       if(this.responseData==200){
       this.navCtrl.push(HomePage);
       }
       else{
        this.navCtrl.push(LogInPage);
       }       
         }, (err) => {
         console.log("Login Failed");
      
      
      
          })
    
}
goToSignIn(){
  this.navCtrl.push(RegistrationPage);
       
}
}