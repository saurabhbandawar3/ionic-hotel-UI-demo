import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SignupdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupdata',
  templateUrl: 'signupdata.html',
})
export class SignupdataPage {

  public fname;
  public email;
  public pswd;
  public address;
  public mobile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fname = navParams.get("fname");
    this.email = navParams.get("email");
    this.pswd = navParams.get("pswd");
    this.address = navParams.get("address");
    this.mobile = navParams.get("mobile");
    console.log(this.fname);
    console.log(this.email);
    console.log(this.pswd);
    console.log(this.address);
    console.log(this.mobile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupdataPage');
  }

}
