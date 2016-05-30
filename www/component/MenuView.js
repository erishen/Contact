"use strict";

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Platform, TabBarIOS } from 'react-native';

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

        var { menu } = this.props;

        this.state = {
            selectedTab: menu
        };
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
        this.setState({
            selectedTab: nextProps.menu
        });
    }

    pressContacts(){
        this.props.clickMenu && this.props.clickMenu(mc.Contacts);
        this.setState({
            selectedTab: 'Contacts'
        });
    }

    pressFavorites(){
        this.props.clickMenu && this.props.clickMenu(mc.Favorites);
        this.setState({
            selectedTab: 'Favorites'
        });
    }

    pressMore(){
        this.props.clickMenu && this.props.clickMenu(mc.More);
        this.setState({
            selectedTab: 'More'
        });
    }

    renderContent() {
        return (<View />);
    }

    render(){
        var { selectedTab } = this.state;

        if(Platform.OS == 'ios') {
            return (
                <View style={sc.footer}>
                    <TabBarIOS unselectedTintColor="yellow" tintColor="white" barTintColor="darkslateblue">
                        <TabBarIOS.Item title="Contacts" systemIcon="contacts"
                                        selected={selectedTab === 'Contacts'} onPress={()=>this.pressContacts()}>
                            {this.renderContent()}
                        </TabBarIOS.Item>

                        <TabBarIOS.Item title="Favorites" systemIcon="favorites"
                                        selected={selectedTab === 'Favorites'} onPress={()=>this.pressFavorites()}>
                            {this.renderContent()}
                        </TabBarIOS.Item>

                        <TabBarIOS.Item title="More" systemIcon="more"
                                        selected={selectedTab === 'More'} onPress={()=>this.pressMore()}>
                            {this.renderContent()}
                        </TabBarIOS.Item>
                    </TabBarIOS>
                </View>
            );
        }
    }
}

export default MenuView;