"use strict";

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Platform, TabBarIOS } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import mc from '../config/Menu';
import is from '../style/Index';

class HeadBar extends Component {

    props: {};

    constructor(props) {
        super(props);
    }

    pressLeft(){
        this.props.onLeft && this.props.onLeft();
    }

    pressRight(){
        this.props.onRight && this.props.onRight();
    }

    render(){
        var { title } = this.props;

        return (
            <View style={[sc.header, cc.head, is.row]}>
                <View style={[is.container, is.left, sc.headerLeft]}>
                    <TouchableOpacity onPress={()=>this.pressLeft()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={[is.container, is.center]}>
                    <Text style={fc.big}>{title}</Text>
                </View>
                <View style={[is.container, is.right, sc.headerRight]}>
                    <TouchableOpacity onPress={()=>this.pressRight()}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HeadBar;