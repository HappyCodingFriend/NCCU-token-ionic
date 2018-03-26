import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

import { HTTP } from '@ionic-native/http'
import { Storage } from '@ionic/storage'

import { FriendPage } from '../friend/friend'
import { PersonalPage } from '../personal/personal'
import { SignInPage } from '../signIn/signIn'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private http: HTTP, private storage: Storage, public navCtrl: NavController) {

	}

	ngOnInit() {
		//沒登入
		this.storage.get('jwt').then((jwt) => {
			if (jwt == null) {
				this.navCtrl.push(SignInPage)
			}
			else {
				this.http.get(`http://101.0.135.141:50000/points?token=${jwt}`, {}, {})
					.then(data => {
						console.log(data)
						let myData = JSON.parse(data.data)
						console.log(myData)
						this.storage.set('points', myData)
					})
					.catch(error => {
						console.error(error)
					})
			}
		})
	}

	go(pageName: any) {

		switch (pageName) {
			case 'friend': {
				this.navCtrl.push(FriendPage)
				break
			}
			case 'detail': {
				this.navCtrl.push(FriendPage)
				break
			}
			case 'rate': {
				this.navCtrl.push(FriendPage)
				break
			}
			case 'personal': {
				this.navCtrl.push(PersonalPage)
				break
			}
			default: {
				console.error('no page')
				break
			}
		}

	}
}