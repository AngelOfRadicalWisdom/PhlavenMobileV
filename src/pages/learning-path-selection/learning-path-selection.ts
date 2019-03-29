import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { learningPath } from '../../Models/learningPath.model';
import { PhpServerProvider} from '../../providers/php-server/php-server';
import {LearningPathVisualizationPage}from '../learning-path-visualization/learning-path-visualization';
import { TakediagPage } from '../takediag/takediag';
import { sendDetails } from '../../Models/sendDetails.model';
/**
 * Generated class for the LearningPathSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-path-selection',
  templateUrl: 'learning-path-selection.html',
})
export class LearningPathSelectionPage {
  requestData;
  sendDetails={} as sendDetails;
revcenterlist:any;
learningpath:any;
learningpathdata = [];
  list = []; 
learningpathId={}as learningPath; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {

  }
  ngOnInit(){
    //this.requestData=this.PhpServer.getUsername();
    this.sendDetails.username=this.PhpServer.getUsername();
    this.PhpServer.getLearningPath(this.sendDetails,'m/reviewee/learningpath/selection').then(data=> {     
     // result.json();
      this.revcenterlist = data; 
  //   this.revcenterlist.json();
     this.list=this.revcenterlist;
      // console.log(this.revcenterlist);  
       console.log (this.revcenterlist) ;
     });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPathSelectionPage');
  }
  
  viewLearningPath($event,revcenter){
    //this.requestData=this.PhpServer.getUsername();
    this.sendDetails.username=this.PhpServer.getUsername();
     this.sendDetails.revcenter=revcenter;
     console.log(revcenter);
    //this.learningpathId.username=this.PhpServer.getUsername();
     this.PhpServer.getLearningPath(this.sendDetails,'m/reviewee/ViewLearningPath').then(data=>{
     this.learningpath=data;
     this.learningpathdata=this.learningpath;
     for (let learningpaths of this.learningpathdata) {
       if(learningpaths.status==0){
         this.navCtrl.setRoot(TakediagPage)
       }
       else{
         this.navCtrl.setRoot(LearningPathVisualizationPage)
       }
     }
    });

}
}
