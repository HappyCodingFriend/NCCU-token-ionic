import { Component } from '@angular/core'
import { PopoverController, AlertController } from 'ionic-angular';

import { HTTP } from '@ionic-native/http'
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner'
import { Storage } from '@ionic/storage'

import { PopFriendPage } from '../popFriend/popFriend'

declare let Web3
declare let ERC223Token

@Component({
	selector: 'page-payment',
	templateUrl: 'payment.html'
})
export class PaymentPage {

	web3: any = new Web3()

	erc: string
	number: number
	targetID: string
	targetName: string
	targetAddress: string

	constructor(private http: HTTP, public alertCtrl: AlertController, private qrScanner: QRScanner, public popoverCtrl: PopoverController, private storage: Storage) {

	}

	pay_bt(event) {
		console.log(event)

		this.storage.get('user').then((user) => {
			this.storage.get('account').then((account) => {
				let prompt = this.alertCtrl.create({
					title: '轉帳',
					message: '請輸入您的交易密碼',
					inputs: [
						{
							name: 'password',
							placeholder: '交易密碼'
						},
					],
					buttons: [
						{
							text: '取消',
							handler: data => {
								console.log('Cancel clicked')
							}
						},
						{
							text: '確定',
							handler: data => {
								console.log('Saved clicked')
								account = this.web3.eth.accounts.decrypt(account, data.password)

								this.http.get(`http://101.0.135.141:50000/nonce?address=${user.address}`, {}, {})
									.then(nonce => {
										console.log(nonce)
										let ERC223TokenContract = new this.web3.eth.Contract(ERC223Token.abi)
										let txData = ERC223TokenContract.methods.transfer(this.targetAddress, this.number).encodeABI()
										let tx = {
											nonce: nonce,
											chainId: '0x11',
											to: this.erc,
											data: txData,
											gasPrice: '0x0',
											gas: 4000000,
										}
										let sign_tx = account.signTransaction(tx)

										this.http.post('http://101.0.135.141:50000/transaction', {
											sign_tx: sign_tx._rejectionHandler0.rawTransaction
										}, {})
											.then(data => {
												console.log(data)
											}).catch(error => {
												console.log(error.status)
												console.log(error.error)
												console.log(error.headers)
											})
									})
							}
						}
					]
				})
				prompt.present()
			})
		})
	}

	friend_bt(event) {
		console.log(event)

		let popover = this.popoverCtrl.create(PopFriendPage)
		popover.present()
	}

	qrcode_bt(event) {
		console.log(event)

		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					// camera permission was granted
					console.log('authorized')

					// start scanning

					let scanSub = this.qrScanner.scan().subscribe((text: string) => {
						this.qrScanner.hide() // hide camera preview
						document.getElementById('gramr').style.visibility = 'visible'
						scanSub.unsubscribe() // stop scanning

						let data = JSON.parse(decodeURIComponent(text))
						console.log(decodeURIComponent(text))

						this.targetID = data.ID
						this.targetName = data.name
						this.targetAddress = data.address
					})

					// show camera preview
					this.qrScanner.show()
					document.getElementById('gramr').style.visibility = 'hidden'

					// wait for user to scan something, then the observable callback will be called

				} else if (status.denied) {
					// camera permission was permanently denied
					// you must use QRScanner.openSettings() method to guide the user to the settings page
					// then they can grant the permission from there
					console.log('denied')
				} else {
					// permission was denied, but not permanently. You can ask for permission again at a later time.
					console.log('denied not permanently')
				}
			})
			.catch((e: any) => console.log('Error is', e))
	}
}