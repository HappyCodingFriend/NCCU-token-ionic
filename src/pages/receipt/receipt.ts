import { Component } from '@angular/core'
import { Brightness } from '@ionic-native/brightness'

declare var QRCode

@Component({
	selector: 'page-receipt',
	templateUrl: 'receipt.html'
})
export class ReceiptPage {
	brightness_checkbox: boolean

	constructor(private brightness: Brightness) {

	}

	qrcode = new QRCode('qrcode', {
		text: '123',
		colorDark: '#000000',
		colorLight: '#ffffff',
		correctLevel: QRCode.CorrectLevel.H
	})

	updateBrightness() {
		if (this.brightness_checkbox) {
			this.brightness.setBrightness(1.0)
		}
		else {
			this.brightness.setBrightness(-1.0)
		}
	}
}
