import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-view',
  templateUrl: 'modal-view.html',
})
export class ModalViewPage {
  public name;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    console.log(name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalViewPage');

  }

}
