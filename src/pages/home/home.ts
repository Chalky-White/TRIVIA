import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { TitleHeaderPage } from '../title-header/title-header';
import { PseudoPage } from '../pseudo/pseudo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
  }


  public goToPseudo() {
    this.navCtrl.push(PseudoPage);
    console.log("vers pseudo");
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }

}
