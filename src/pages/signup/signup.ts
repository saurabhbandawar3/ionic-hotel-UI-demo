import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupdataPage} from "../signupdata/signupdata";
import {SigninPage} from "../signin/signin";
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signin(){
    this.navCtrl.push(SigninPage);
  }
  public fname;
  public email;
  public pswd;
  public address;
  public mobile;

  signup(){
    console.log(this.fname);
    console.log(this.email);
    console.log(this.pswd);
    console.log(this.address);
    console.log(this.mobile);

    this.navCtrl.push(SignupdataPage ,{
      fname : this.fname,
      email : this.email,
      pswd: this.pswd,
      address: this.address,
      mobile: this.mobile
    });
  }
  showModal() {
    let modal = this.modalCtrl.create(SignupdataPage,{
      fname : this.fname
    });
    modal.present();
  }

}
