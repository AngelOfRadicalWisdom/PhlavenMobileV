import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningPathSelectionPage } from './learning-path-selection';

@NgModule({
  declarations: [
    LearningPathSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningPathSelectionPage),
  ],
})
export class LearningPathSelectionPageModule {}
