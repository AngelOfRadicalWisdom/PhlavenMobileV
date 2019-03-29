import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LearningPathSelectionPage} from '../learning-path-selection/learning-path-selection';
import {ProfilePage} from '../profile/profile';
import { PhpServerProvider } from '../../providers/php-server/php-server';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  requestData;
revcenterlist:any;
list=[];

  constructor(public navCtrl: NavController, public PhpServer:PhpServerProvider) {

  }
  goToLearningPathSelection() {
    this.navCtrl.push(LearningPathSelectionPage);
  }
  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }
}

