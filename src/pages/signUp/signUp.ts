import { Component } from '@angular/core'
import { AlertController, NavController } from 'ionic-angular'

import { HTTP } from '@ionic-native/http'
import { Storage } from '@ionic/storage'

import { HomePage } from '../home/home'
import { SignInPage } from '../signIn/signIn'

declare let Web3

@Component({
	selector: 'page-signUp',
	templateUrl: 'signUp.html'
})
export class SignUpPage {

	web3: any = new Web3()

	ID: string
	name: string
	email: string
	password: string
	address: string

	constructor(private http: HTTP, private storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController) {

	}

	signUp() {
		this.http.post('http://101.0.135.141:50000/user', {
			ID: this.ID,
			name: this.name,
			email: this.email,
			password: this.password,
			address: this.address,
		}, {})
			.then(data => {
				let myData = JSON.parse(data.data)
				console.log(myData)
				if (myData.type) {
					this.storage.set('jwt', data.data.token)
					let alert = this.alertCtrl.create({
						title: myData.inf,
						buttons: [{
							text: '確定',
							handler: () => {
								this.navCtrl.setRoot(SignInPage)
							}
						}]
					})
					alert.present()
				}
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
			}).catch(error => {
				console.log(error.status)
				console.log(error.error)
				console.log(error.headers)
			})
	}

	create(ev: any) {
		let account = this.web3.eth.accounts.create()
		console.log(account)

		let prompt = this.alertCtrl.create({
			title: '交易密碼',
			message: '請輸入您的交易密碼，用於保護您的私鑰',
			inputs: [
				{
					name: 'password',
				}
			],
			buttons: [
				{
					text: '取消',
				},
				{
					text: '確定',
					handler: data => {
						this.address = account.address
						this.storage.set('account', account.encrypt(data.password))
					}
				}
			]
		})
		prompt.present()
	}

	signIn() {
		this.navCtrl.push(SignInPage)
	}
}
