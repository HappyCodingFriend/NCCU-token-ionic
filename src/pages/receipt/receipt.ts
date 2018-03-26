import { Component } from '@angular/core'
import { Brightness } from '@ionic-native/brightness'

import { Storage } from '@ionic/storage'

declare let QRCode

@Component({
	selector: 'page-receipt',
	templateUrl: 'receipt.html'
})
export class ReceiptPage {
	brightness_checkbox: boolean
	qrcode: object

	constructor(private storage: Storage, private brightness: Brightness) {

	}

	ngOnInit() {
		this.storage.get('user').then((user) => {
			console.log(user)
			
			this.qrcode = new QRCode('qrcode', {
				text: encodeURIComponent(JSON.stringify(user)),
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.H
			})
		})
	}

	updateBrightness() {
		if (this.brightness_checkbox) {
			this.brightness.setBrightness(1.0)
		}
		else {
			this.brightness.setBrightness(-1.0)
		}
	}
}

