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
import HeadBar from './HeadBar';

class MenuNavigator extends Component {

    props: {};

    constructor(props) {
        super(props);
        this.ref = [];
        this.state = {
            routeId: ''
        };
    }

    getRef(id, ref){
        if(this.ref)
            this.ref[id] = ref;
    }

    getScene(route, navigator){
        var id = route.id;
        var statusBarHidden = route.statusBarHidden;
        var Content = route.Content;
        var passProps = route.passProps;
        console.log('getScene', id, statusBarHidden);

        return (
            <View>
                <StatusBar hidden={statusBarHidden} />
                <Content ref={(e)=>this.getRef(id, e)} navigator={navigator} {...passProps} clickMenu={(obj)=>this.clickMenu(obj)} />
            </View>
        );
    }

    renderScene(route, navigator){
        this.navigator = navigator;
        return this.getScene(route, navigator);
    }

    configureScene(route, routeStack){
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    onDidFocus(route){
        console.log('onDidFocus');
    }

    onWillFocus(route){
        var { routeId } = this.state;
        console.log('onWillFocus', route, routeId);
        this.lastRouteId = routeId;

        this.setState({
            routeId: route.id
        });
    }

    clickMenu(obj){
        console.log('clickMenu', obj);
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

    pressLeft(){
        var { routeId } = this.state;
        console.log('pressLeft', routeId, this.lastRouteId);

        if(this.ref && this.ref[routeId]) {

            if(this.ref[routeId].onLeft) {
                this.ref[routeId].onLeft();
            }
            else if (this.lastRouteId && this.lastRouteId != '') {
                this.clickMenu(mc[this.lastRouteId]);
            }
        }
    }

    pressRight(){
        var { routeId } = this.state;
        console.log('pressRight', routeId, this.lastRouteId, this.ref);

        if(this.ref && this.ref[routeId] && this.ref[routeId].onRight)
            this.ref[routeId].onRight();
    }

    render(){
        var { routeId } = this.state;

        return (
            <View style={[is.container, cc.container]}>
                <HeadBar title={routeId} onLeft={()=>this.pressLeft()} onRight={()=>this.pressRight()} />
                <Navigator initialRoute={mc.Contacts}
                       renderScene={(route, navigator)=>this.renderScene(route, navigator)}
                       configureScene={(route, routeStack)=>this.configureScene(route, routeStack)}
                       onDidFocus={(route)=>this.onDidFocus(route)}
                       onWillFocus={(route)=>this.onWillFocus(route)}
                       navigationBar={<MenuView menu={routeId} clickMenu={(obj)=>this.clickMenu(obj)} />} />
            </View>
        );
    }
}

export default MenuNavigator;