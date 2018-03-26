import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import { Storage } from '@ionic/storage'

import { SignInPage } from '../signIn/signIn'

@Component({
	selector: 'page-setting',
	templateUrl: 'setting.html'
})
export class SettingPage {

	items: Array<Array<string>>

	constructor(public navCtrl: NavController, private storage: Storage) {
		this.items = [
			['aa', 'true'],
			['aa', 'false'],
		]
	}

	signOut() {
		this.storage.remove('jwt').then(() => {
			this.navCtrl.push(SignInPage)
		})
	}
}
