import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TitleHeaderPage } from '../title-header/title-header';
import { PseudoPage } from '../pseudo/pseudo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public goToPseudo() {
    this.navCtrl.push(PseudoPage);
    console.log("vers pseudo");
  }

}
