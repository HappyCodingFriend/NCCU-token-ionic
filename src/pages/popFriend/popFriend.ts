import { Component } from '@angular/core'
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular'

import { HTTP } from '@ionic-native/http'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'page-popFriend',
	templateUrl: 'popFriend.html'
})
export class PopFriendPage {
	names: Array<string>
	contents: Array<string>
	imgs: Array<string>
	items: Array<{ name: string, friendID: string, img: string }>

	constructor(public viewCtrl: ViewController, private http: HTTP, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private storage: Storage) {
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

	getFriend(event) {
		console.log(event)
		this.viewCtrl.dismiss();
	}
}
