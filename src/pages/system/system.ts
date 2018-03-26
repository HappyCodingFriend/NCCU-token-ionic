import { Component } from '@angular/core'

import { Device } from '@ionic-native/device'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'page-friend',
	templateUrl: 'system.html'
})
export class SystemPage {

	deviceItems: Array<Array<any>>
	storageItems: Array<Array<any>>

	constructor(private device: Device, private storage: Storage) {

		this.deviceItems = [
			['cordova', this.device.cordova],
			['model', this.device.model],
			['platform', this.device.platform],
			['uuid', this.device.uuid],
			['version', this.device.version],
			['manufacturer', this.device.manufacturer],
			['isVirtual', this.device.isVirtual],
			['serial', this.device.serial],
		]

		this.storageItems = [
			['driver', this.storage.driver]
		]
		this.storage.get('jwt').then((jwt) => {
			this.storageItems.push(['jwt', jwt != null])
		})
		this.storage.ready().then((val) => {
			this.storageItems.push(['ready', val])
		})
		this.storage.length().then((val) => {
			this.storageItems.push(['length', val])
		})
	}
}
