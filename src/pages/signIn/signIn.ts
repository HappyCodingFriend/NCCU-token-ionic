import { Component } from '@angular/core'
import { NavController, AlertController, Platform } from 'ionic-angular'

import { HTTP } from '@ionic-native/http'
import { Storage } from '@ionic/storage'

import { HomePage } from '../home/home'
import { SignUpPage } from '../signUp/signUp'

@Component({
	selector: 'page-signIn',
	templateUrl: 'signIn.html'
})
export class SignInPage {

	ID: string
	password: string

	constructor(private http: HTTP, private storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController) {

	}

	signIn() {
		console.log(this.ID, this.password)
		this.http.get(`http://101.0.135.141:50000/user?ID=${this.ID}&password=${this.password}`, {}, {})
			.then(data => {
				let myData = JSON.parse(data.data)
				console.log(myData)
				//登入成功
				if (myData.type) {
					this.storage.set('user', {
						ID: myData.ID,
						name: myData.name,
						address: myData.address,
					})
					this.storage.set('jwt', myData.token)
					let alert = this.alertCtrl.create({
						title: myData.inf,
						buttons: [{
							text: '確定',
							handler: () => {
								this.navCtrl.setRoot(HomePage)
							}
						}]
					})
					alert.present()
				}
				//登入失敗
				else {
					let alert = this.alertCtrl.create({
						title: myData.inf,
						buttons: [{
							text: '確定',
							handler: () => {

							}
						}]
					})
					alert.present()
				}
			})
			.catch(error => {
				console.log(error.status)
				console.log(error.error)
			})
	}
	signUp() {
		this.navCtrl.push(SignUpPage)
	}
}
