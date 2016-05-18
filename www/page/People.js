"use strict";

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

class People extends Component {
    render(){
        return (
            <View style={[is.container, sc.content]}>
                <View style={[is.container, is.footMenu]}>
                    <Text style={[fc.big, cc.footMenu]}>People</Text>
                    <Image style={ic.people.style} source={ic.people.source} />
                </View>
            </View>
        );
    }
}

export default People;