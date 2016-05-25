"use strict";

import React, { Component } from 'react';
import { Navigator, StatusBar, Text, View, Image } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import mc from '../config/Menu';
import is from '../style/Index';

import Contacts from '../page/Contacts';
import Favorites from '../page/Favorites';
import More from '../page/More';

import MenuView from './MenuView';

class MenuNavigator extends Component {

    props: {};

    constructor(props) {
        super(props);
        this.state = {
            headBarTitle: ''
        };
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
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    onDidFocus(route){
        console.log('onDidFocus');
    }

    onWillFocus(route){
        console.log('onWillFocus', route);
        this.setState({
            headBarTitle: route.id
        });
    }

    clickMenu(obj){
        var navigator = this.navigator;

        if(navigator) {
            var currentRoutes = navigator.getCurrentRoutes();

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
        var { headBarTitle } = this.state;

        return (
            <View style={[is.container, cc.container]}>
                <View style={[sc.header, cc.head, is.center]}>
                    <Text style={fc.big}>{headBarTitle}</Text>
                </View>
                <Navigator initialRoute={mc.Contacts}
                       renderScene={(route, navigator)=>this.renderScene(route, navigator)}
                       configureScene={(route, routeStack)=>this.configureScene(route, routeStack)}
                       onDidFocus={(route)=>this.onDidFocus(route)}
                       onWillFocus={(route)=>this.onWillFocus(route)}
                       navigationBar={<MenuView clickMenu={(obj)=>this.clickMenu(obj)} />} />
            </View>
        );
    }
}

export default MenuNavigator;