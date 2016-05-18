"use strict";

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

class Setting extends Component {
    render(){
        return (
            <View style={[is.container, sc.content]}>
                <View style={[is.container, is.footMenu]}>
                    <Text style={[fc.big, cc.footMenu]}>Setting</Text>
                    <Image style={ic.setting.style} source={ic.setting.source} />
                </View>
            </View>
        );
    }
}

export default Setting;