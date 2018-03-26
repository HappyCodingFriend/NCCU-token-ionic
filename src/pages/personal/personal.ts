import { Component } from '@angular/core'

import { HTTP } from '@ionic-native/http'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'page-personal',
	templateUrl: 'personal.html'
})
export class PersonalPage {

	points: Array<any>
	address: string

	constructor(private http: HTTP, private storage: Storage) {
		this.initializeItems()
	}

	initializeItems() {
		this.storage.get('account').then((account) => {
			console.log(account)
			this.address = account.address
		})
		this.storage.get('jwt').then((jwt) => {
			this.storage.get('points').then((points) => {
				this.points = points
				this.points.forEach((point) => {
					this.http.get(`http://101.0.135.141:50000/point/${point.address}?token=${jwt}`, {}, {})
						.then(data => {
							let myData = JSON.parse(data.data)
							point.balance = myData
						})
						.catch(error => {
							console.error(error)
						})
				})
			})
		})
	}
}
