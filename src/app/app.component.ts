import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { FriendPage } from '../pages/friend/friend'
//import { SystemPage } from '../pages/system/system'

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav

	rootPage: any = HomePage

	pages: Array<{ title: string, component: any }>

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp()

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: '首頁', component: HomePage },
			{ title: 'List', component: ListPage },
			//{ title: '交換', component: FriendPage },
			//{ title: '轉帳', component: FriendPage },
			//{ title: '收款', component: FriendPage },
			//{ title: '明細', component: FriendPage },
			{ title: '好友', component: FriendPage },
			//{ title: '匯率', component: FriendPage },
			//{ title: '我的帳戶', component: FriendPage },
			//{ title: '私鑰管理', component: FriendPage },
			//{ title: '設定', component: FriendPage },
			//{ title: '系統', component: SystemPage },
		]

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault()
			this.splashScreen.hide()
		})
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component)
	}
}
