"use strict";

import React, { Component } from 'react';
import { Navigator, Text, View, Image } from 'react-native';

import is from '../style/Index';

import News from '../page/News';
import People from '../page/People';
import Setting from '../page/Setting';

import MenuView from './MenuView';

class MenuNavigator extends Component {

    props: {};

    constructor(props) {
        super(props);
        console.log('constructor', this.props);
    }

    renderScene(route, navigator){
        console.log('renderScene', route, navigator);
        var id = route.id;
        this.navigator = navigator;

        switch (id)
        {
            case 'News':
                return (<News navigator={navigator} />);
                break;
            case 'People':
                return (<People navigator={navigator} />);
                break;
            case 'Setting':
                return (<Setting navigator={navigator} />);
                break;
        }
    }

    clickMenu(menu){
        console.log('clickMenu', menu);
        this.navigator && this.navigator.push({ id: menu });
    }

    render(){
        return (
            <Navigator style={is.container} initialRoute={{ id: 'News' }}
                       renderScene={(route, navigator)=>this.renderScene(route, navigator)}
                       navigationBar={<MenuView clickMenu={(menu)=>this.clickMenu(menu)} />} />
        );
    }
}

export default MenuNavigator;