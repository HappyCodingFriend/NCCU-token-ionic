import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../../pages/home/home'
import { SignInPage } from '../../pages/signIn/signIn'
import { SignUpPage } from '../../pages/signUp/signUp'
import { FriendPage } from '../../pages/friend/friend'
import { PaymentPage } from '../../pages/payment/payment'
import { ReceiptPage } from '../../pages/receipt/receipt'
import { TimelinePage } from '../../pages/timeline/timeline'
import { KeyPage } from '../../pages/key/key'
import { PersonalPage } from '../../pages/personal/personal'
import { SettingPage } from '../../pages/setting/setting'
import { SystemPage } from '../../pages/system/system'

@Component({
	selector: 'page-sideMenu',
	templateUrl: 'SideMenu.html'
})
export class SideMenu {
	@ViewChild(Nav) nav: Nav

	rootPage: any = HomePage

	add: string = "add";

	pages: Array<{ title: string, component: any, icon: string }>

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp()

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: '首頁', component: HomePage, icon: 'home' },
			{ title: '登入', component: SignInPage, icon: 'add' },
			{ title: '註冊', component: SignUpPage, icon: 'add' },
			{ title: '朋友', component: FriendPage, icon: 'people' },
			{ title: '轉帳', component: PaymentPage, icon: 'logo-bitcoin' },
			{ title: '收款', component: ReceiptPage, icon: 'add' },
			{ title: '時間線', component: TimelinePage, icon: 'book' },
			{ title: '公私鑰', component: KeyPage, icon: 'key' },
			{ title: '我的帳戶', component: PersonalPage, icon: 'person' },
			{ title: '設定', component: SettingPage, icon: 'options' },
			{ title: '系統', component: SystemPage, icon: 'options' },
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