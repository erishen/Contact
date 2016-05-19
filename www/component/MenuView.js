"use strict";

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import mc from '../config/Menu';
import is from '../style/Index';

class MenuView extends Component {

    props: {};

    constructor(props) {
        super(props);
        console.log('constructor', this.props);
    }

    pressNews(){
        this.props.clickMenu && this.props.clickMenu(mc.News);
    }

    pressPeople(){
        console.log('pressPeople', this.props);
        this.props.clickMenu && this.props.clickMenu(mc.People);
    }

    pressSetting(){
        this.props.clickMenu && this.props.clickMenu(mc.Setting);
    }

    render(){
        return (
            <View style={is.row}>
                <TouchableOpacity onPress={()=>this.pressNews()}>
                    <View style={[is.footMenu, sc.footMenu]}>
                        <Text style={[fc.medium, cc.footMenu]}>News</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.pressPeople()}>
                    <View style={[is.footMenu, sc.footMenu]}>
                        <Text style={[fc.medium, cc.footMenu]}>People</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.pressSetting()}>
                    <View style={[is.footMenu, sc.footMenu]}>
                        <Text style={[fc.medium, cc.footMenu]}>Setting</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MenuView;