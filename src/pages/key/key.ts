import { Component } from '@angular/core'
import { AlertController } from 'ionic-angular'

import { Storage } from '@ionic/storage'

declare let Web3

@Component({
	selector: 'page-key',
	templateUrl: 'key.html'
})
export class KeyPage {

	web3: any = new Web3()

	constructor(private storage: Storage, public alertCtrl: AlertController) {

	}

	write(ev: any) {

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
						this.storage.set('account', account.encrypt(data.password))
					}
				}
			]
		})

		prompt.present()
	}

	read(ev: any) {
		(this.storage.get('account').then((account) => {console.log(account)}))
	}

}