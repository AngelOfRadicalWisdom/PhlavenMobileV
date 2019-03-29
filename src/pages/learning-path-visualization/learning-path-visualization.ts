import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TakediagPage}from '../takediag/takediag';
import {StartlessonPage}from '../startlesson/startlesson';
import { PhpServerProvider } from '../../providers/php-server/php-server';

/**
 * Generated class for the LearningPathVisualizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-path-visualization',
  templateUrl: 'learning-path-visualization.html',
})
export class LearningPathVisualizationPage {
  requestData: any;
  learningpath: any;
  learningpathdata=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {
  }
  ngOnInit(){
    this.requestData=this.PhpServer.getUsername();
    this.PhpServer.getLearningPath(this.requestData,'m/reviewee/ViewLearningPath').then(data=>{
     this.learningpath=data;
     this.learningpathdata=this.learningpath;
    })


  }
  startChapter(){
    this.navCtrl.push(StartlessonPage);
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPathVisualizationPage');
  }
  gotoDiag(){
    this.navCtrl.setRoot(TakediagPage)
  }
}
