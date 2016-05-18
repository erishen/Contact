"use strict";

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import MenuNavigator from './www/component/MenuNavigator';
import is from './www/style/Index';
import cc from './www/config/Color';

class Contact extends Component {
    render() {
        return (
            <View style={[is.container, cc.container]}>
                <MenuNavigator />
            </View>
        );
    }
}

AppRegistry.registerComponent('Contact', () => Contact);
