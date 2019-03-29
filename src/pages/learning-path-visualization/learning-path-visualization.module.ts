import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningPathVisualizationPage } from './learning-path-visualization';

@NgModule({
  declarations: [
    LearningPathVisualizationPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningPathVisualizationPage),
  ],
})
export class LearningPathVisualizationPageModule {}
