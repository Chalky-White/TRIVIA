import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizzSettingsPage } from '../quizz-settings/quizz-settings';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PseudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pseudo',
  templateUrl: 'pseudo.html'
})
export class PseudoPage {

  public nickname : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PseudoPage');
  }

  sendNickname() {
    this.navCtrl.push(QuizzSettingsPage, {
      nickname: this.nickname
    });
    console.log("envoi du pseudo "+ this.nickname +" vers la page de settings");
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }

}
