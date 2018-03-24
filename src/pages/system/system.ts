import { Component } from '@angular/core'

import { Device } from '@ionic-native/device'

@Component({
	selector: 'page-friend',
	templateUrl: 'system.html'
})
export class SystemPage {

 	items: Array<Array<any>>

	constructor(private device: Device) {

		this.items = [
			['cordova', this.device.cordova],
			['model', this.device.model],
			['platform', this.device.platform],
			['uuid', this.device.uuid],
			['version', this.device.version],
			['manufacturer', this.device.manufacturer],
			['isVirtual', this.device.isVirtual],
			['serial', this.device.serial],
		]
	}
}
