import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component({
	selector: 'page-friend',
	templateUrl: 'friend.html'
})
export class FriendPage {
	names: Array<string>
	contents: Array<string>
	imgs: Array<string>
	items: Array<{ name: string, content: string, img: string }>

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.names = ['陳韋禎', '邱天', '彭麒家']
		this.contents = ['胖嘟嘟', '也胖嘟嘟', '沒有胖嘟嘟']
		this.imgs = ['assets/imgs/man1.jpg', 'assets/imgs/man2.jpg', 'assets/imgs/man3.jpg']

		this.items = [];
		for (let i = 0; i < 3; i++) {
			this.items.push({
				name: this.names[i],
				content: this.contents[i],
				img: this.imgs[i],
			})
		}
	}
}
