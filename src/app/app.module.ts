import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { FriendPage } from '../pages/friend/friend'
import { PaymentPage } from '../pages/payment/payment'
import { ReceiptPage } from '../pages/receipt/receipt'
import { SystemPage } from '../pages/system/system'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { Device } from '@ionic-native/device'
import { Brightness } from '@ionic-native/brightness'


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		FriendPage,
		PaymentPage,
		ReceiptPage,
		SystemPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage,
		FriendPage,
		PaymentPage,
		ReceiptPage,
		SystemPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		Device,
		Brightness,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
	]
})
export class AppModule { }
