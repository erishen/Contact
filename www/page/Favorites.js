"use strict";

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

class Favorites extends Component {
    onRight(){
        console.log('onRight');
    }
    
    render(){
        return (
            <View style={[sc.content]}>
                
            </View>
        );
    }
}

export default Favorites;