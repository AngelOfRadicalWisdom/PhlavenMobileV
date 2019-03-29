import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhpServerProvider } from '../../providers/php-server/php-server';
import { sendDetails } from '../../Models/sendDetails.model';
import{AddRevcenterPage} from '../../pages/add-revcenter/add-revcenter'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  sendDetails={} as sendDetails;
  requestData:any;
  profile:any;
  profiledata=[];
  revcenter:any;
  revcenterdata=[];
  examresults:any;
  examresultsdata=[];
  lessons:any;
  lessonsdata=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {
  }
  ngOnInit(){
    this.sendDetails.username=this.PhpServer.getUsername();
    this.PhpServer.viewProfile(this.sendDetails,'m/reviewee/viewProfile').then(data=>{
      this.profile=data;
      this.profiledata=this.profile;
})
this.PhpServer.getRevCenterPerUser(this.sendDetails,'m/reviewee/getRevCenterPerUser').then(data=>{
  this.revcenter=data;
  this.revcenterdata=this.revcenter;
})
this.PhpServer.getExamAndResultsPerUser(this.sendDetails,'m/reviewee/getExamAndResultsPerUser').then(data=>{
  this.examresults=data;
  this.examresultsdata=this.examresults;
})
this.PhpServer.getLessonsPerUser(this.sendDetails,'m/reviewee/getLessonsPerUser').then(data=>{
  this.lessons=data;
  this.lessonsdata=this.lessons;
})

    }
    AddRevcenter(){
      this.navCtrl.push(AddRevcenterPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
