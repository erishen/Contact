"use strict";

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

class More extends Component {
    render(){
        return (
            <View style={sc.content}>
                <View style={[sc.header, cc.head, is.center]}>
                    <Text style={fc.big}>More</Text>
                </View>
            </View>
        );
    }
}

export default More;