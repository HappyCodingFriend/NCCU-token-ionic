import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'

import { SideMenu } from '../component/sideMenu/sideMenu'
import { TabsText } from '../component/tabsText/tabsText'
import { HomePage } from '../pages/home/home'
import { SignInPage } from '../pages/signIn/signIn'
import { SignUpPage } from '../pages/signUp/signUp'
import { FriendPage } from '../pages/friend/friend'
import { PaymentPage } from '../pages/payment/payment'
import { ReceiptPage } from '../pages/receipt/receipt'
import { TimelinePage } from '../pages/timeline/timeline'
import { KeyPage } from '../pages/key/key'
import { PersonalPage } from '../pages/personal/personal'
import { SettingPage } from '../pages/setting/setting'
import { SystemPage } from '../pages/system/system'
import { PopFriendPage } from '../pages/popFriend/popFriend'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { Device } from '@ionic-native/device'
import { Brightness } from '@ionic-native/brightness'
import { QRScanner } from '@ionic-native/qr-scanner'
import { HTTP } from '@ionic-native/http'
import { Dialogs } from '@ionic-native/dialogs'
import { NativeStorage } from '@ionic-native/native-storage'
import { SecureStorage } from '@ionic-native/secure-storage'

@NgModule({
	declarations: [
		SideMenu,
		TabsText,
		HomePage,
		SignInPage,
		SignUpPage,
		FriendPage,
		PaymentPage,
		ReceiptPage,
		TimelinePage,
		KeyPage,
		PersonalPage,
		SettingPage,
		SystemPage,
		PopFriendPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(SideMenu),
		IonicStorageModule.forRoot({
			name: '__mydb',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		SideMenu,
		TabsText,
		HomePage,
		SignInPage,
		SignUpPage,
		FriendPage,
		PaymentPage,
		ReceiptPage,
		TimelinePage,
		KeyPage,
		PersonalPage,
		SettingPage,
		SystemPage,
		PopFriendPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		Device,
		Brightness,
		QRScanner,
		HTTP,
		Dialogs,
		NativeStorage,
		SecureStorage,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
	]
})
export class AppModule { }
