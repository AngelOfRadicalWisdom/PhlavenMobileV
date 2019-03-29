import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhpServerProvider } from '../../providers/php-server/php-server';
import { addRevcenter } from '../../Models/addRevcenter.model';
import { sendDetails } from '../../Models/sendDetails.model';
/**
 * Generated class for the AddRevcenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-revcenter',
  templateUrl: 'add-revcenter.html',
})
export class AddRevcenterPage {
  responseData:any;
  revcenterlist:any;
 //revcenter;
list=[];      
addRevCenter={}as addRevcenter;
sendDetails={} as sendDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams,public PhpServer:PhpServerProvider) {
  }
  ngOnInit(){
    this.sendDetails.username=this.PhpServer.getUsername();
    this.sendDetails.revcenter=this.PhpServer.passRevcenter();
    this.PhpServer.getAddRevcenter(this.sendDetails,'m/reviewee/addRevCenter').then(data=> {     
     // result.json();
      this.revcenterlist = data; 
  //   this.revcenterlist.json();
     this.list=this.revcenterlist;
      // console.log(this.revcenterlist);  
       //3console.log (this.list) ;
     });
    }
    updateRevCenter(){
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRevcenterPage');
  }

}
