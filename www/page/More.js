"use strict";

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import mc from '../config/Menu';
import is from '../style/Index';

class More extends Component {
    props: {};

    constructor(props){
        super(props);
        this.userIds = [];
    }

    onLeft(){
        var { userId, clickMenu } = this.props;
        console.log('onLeft', userId);

        if(this.userIds.length > 0) {
            var More = mc.More;

            var lastUserId = 0;
            if(this.userIds.length > 1) {
                this.userIds.pop();
                lastUserId = this.userIds[this.userIds.length - 1];
            }
            else
            {
                this.userIds.pop();
                lastUserId = 1;
            }

            More.passProps = { userId: lastUserId };
            clickMenu && clickMenu(More);
        }
        else
        {
            clickMenu && clickMenu(mc.Favorites);
        }
    }

    onRight(){
        var { userId, clickMenu } = this.props;
        console.log('onRight', userId);

        var More = mc.More;
        var newUserId = userId + 1;
        More.passProps = { userId: newUserId };
        this.userIds.push(newUserId);
        clickMenu && clickMenu(More);
    }

    render(){
        var { userId } = this.props;

        return (
            <View style={sc.content}>
                <Text style={fc.medium}>{userId}</Text>
            </View>
        );
    }
}

export default More;