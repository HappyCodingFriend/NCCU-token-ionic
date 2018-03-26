import { Component } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'

import { HTTP } from '@ionic-native/http'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'page-friend',
	templateUrl: 'friend.html'
})
export class FriendPage {
	names: Array<string>
	contents: Array<string>
	imgs: Array<string>
	items: Array<{ name: string, friendID: string, img: string }>

	constructor(private http: HTTP, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private storage: Storage) {
		this.initializeItems()
	}

	initializeItems() {

		this.storage.get('jwt').then((jwt) => {
			console.log(jwt)
			this.http.get(`http://101.0.135.141:50000/friends?token=${jwt}`, {}, {})
				.then(data => {
					console.log(data.status)
					console.log(data.data)
					console.log(data.headers)
					let myData = JSON.parse(data.data)
					this.items = myData
				})
				.catch(error => {
					console.log(error.status)
					console.log(error.error)
					console.log(error.headers)
				})
		})

	}

	getItems(ev: any) {
		// Reset items back to all of the items
		this.initializeItems()

		// set val to the value of the searchbar
		let val = ev.target.value

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
			})
		}
	}

	addID() {
		let prompt = this.alertCtrl.create({
			title: '搜尋好友',
			message: '輸入好友學號',
			inputs: [
				{
					name: 'title',
					placeholder: 'Title'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked')
					}
				},
				{
					text: 'Save',
					handler: data => {
						console.log('Saved clicked')
					}
				}
			]
		})
		prompt.present()
	}

	addQR() {

	}
}
