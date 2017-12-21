import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SigninPage } from "../signin/signin";
import { SignupPage } from "../signup/signup";
import { PlayVideoPage } from "../play-video/play-video";
import { ActionSheetController } from "ionic-angular";
import { ModalController } from 'ionic-angular';
import { ModalViewPage} from "../modal-view/modal-view";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public actionCtrl: ActionSheetController ,public modalCtrl: ModalController) {

  }

  @ViewChild(Slides) slider: Slides;

  ngAfterViewInit() {
    this.slider.slidesPerView = 1;
    this.slider.pager = true;
  }

  signIn() {
    this.navCtrl.push(SigninPage);
  }

  signUp() {
    this.navCtrl.push(SignupPage);
  }

  watchVid() {
    this.navCtrl.push(PlayVideoPage)
  }

  showactionsheet() {
    let action = this.actionCtrl.create({
      title: 'Action Sheet',
      buttons: [
        {
          text: 'Visit On Facebook Page',
          handler: () => {
            console.log('Visit FB clicked');
          }
        },
        {
          text: 'Share Link ',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Watch Video ',
          handler: () => {
            this.navCtrl.push(PlayVideoPage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    action.present();
  }

  name :string
  showModal() {
    let modal = this.modalCtrl.create(ModalViewPage,{
      name :this.name});
    modal.present();
  }

}




