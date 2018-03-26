import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../../pages/home/home'
import { FriendPage } from '../../pages/friend/friend'

@Component({
    templateUrl: 'tabsText.html'
})

export class TabsText {
    @ViewChild(Nav) nav: Nav

    rootPage = HomePage
    isAndroid: boolean = false

    tab1: any
    tab2: any

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.tab1 = HomePage
        this.tab2 = FriendPage
    }
}