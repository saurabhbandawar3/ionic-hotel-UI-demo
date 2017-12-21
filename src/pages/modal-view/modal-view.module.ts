import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalViewPage } from './modal-view';

@NgModule({
  declarations: [
    ModalViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalViewPage),
  ],
})
export class ModalViewPageModule {}
