"use strict";

import React, { Component } from 'react';
import { Navigator, StatusBar, Text, View, Image } from 'react-native';

import is from '../style/Index';
import mc from '../config/Menu';

import Contacts from '../page/Contacts';
import Favorites from '../page/Favorites';
import More from '../page/More';

import MenuView from './MenuView';

class MenuNavigator extends Component {

    props: {};

    constructor(props) {
        super(props);
        console.log('constructor', this.props);
    }

    getScene(component, statusBarHidden){
        console.log('getScene', statusBarHidden);
        return (
            <View>
                <StatusBar hidden={statusBarHidden} />
                {component}
            </View>
        );
    }

    renderScene(route, navigator){
        console.log('renderScene', route, navigator);
        var id = route.id;
        var statusBarHidden = route.statusBarHidden;
        this.navigator = navigator;

        switch (id)
        {
            case 'Contacts': return this.getScene(<Contacts navigator={navigator} />, statusBarHidden);
            case 'Favorites': return this.getScene(<Favorites navigator={navigator} />, statusBarHidden);
            case 'More': return this.getScene(<More navigator={navigator} />, statusBarHidden);
        }
    }

    configureScene(route, routeStack){
        console.log('configureScene', route, routeStack);
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    onDidFocus(route){
        console.log('onDidFocus', route);
    }

    onWillFocus(route){
        console.log('onWillFocus', route);
    }

    clickMenu(obj){
        var navigator = this.navigator;

        if(navigator) {
            var currentRoutes = navigator.getCurrentRoutes();
            console.log('clickMenu', obj, currentRoutes);

            var existFlag = false;
            var existRoute = null;

            for (var i in currentRoutes) {
                var currentRoute = currentRoutes[i];
                var currentRouteId = currentRoute.id;

                if (currentRouteId == obj.id) {
                    existFlag = true;
                    existRoute = currentRoute;
                    break;
                }
            }

            if (existFlag) {
                navigator.jumpTo(existRoute);
                StatusBar.setHidden(obj.statusBarHidden);
            }
            else {
                navigator.push(obj);
            }
        }
    }

    render(){
        return (
            <Navigator initialRoute={mc.Contacts}
                       renderScene={(route, navigator)=>this.renderScene(route, navigator)}
                       configureScene={(route, routeStack)=>this.configureScene(route, routeStack)}
                       onDidFocus={(route)=>this.onDidFocus(route)}
                       onWillFocus={(route)=>this.onWillFocus(route)}
                       navigationBar={<MenuView clickMenu={(menu, statusBarHidden)=>this.clickMenu(menu, statusBarHidden)} />} />
        );
    }
}

export default MenuNavigator;