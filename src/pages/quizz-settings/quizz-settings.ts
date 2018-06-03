import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PseudoPage } from '../pseudo/pseudo'
//import { DataServicesService } from './services/data-service.service;

/**
 * Generated class for the QuizzSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz-settings',
  templateUrl: 'quizz-settings.html',
})


// @Injectable()
// export class DataService {
//     constructor(private http: Http) { }
//     getListe(): Promise<Object[]> {
//         return new Promise((resolve, reject) => {
//             return this.http.get("https://opentdb.com/api.php?amount=10)
//                 .toPromise()
//                 .then((response) => {
//                     resolve(response.json()["Search"]);
//                 });
//         });
//     }
// }
export class QuizzSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzSettingsPage');
  }

}
