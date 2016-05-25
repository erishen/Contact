"use strict";

import React, { Component } from 'react';
import { Text, View, Image, ListView, NativeModules } from 'react-native';

import ReactNativeContacts from 'react-native-contacts';
var LocalContact = NativeModules.LocalContact;

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

import ContactCell from '../component/ContactCell';

class Contacts extends Component {
    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows([])
        };
    }

    componentWillMount(){
        console.log('componentWillMount');

        ReactNativeContacts.getAll((err, result)=>{
            if(err && err.type === 'permissionDenied'){

            } else {
                //console.log('getAll_result', result);
                this.setState({
                    dataSource: this.ds.cloneWithRows(result)
                });
            }
        });

        /*
        LocalContact.getAll((err, result)=>{
            console.log('LocalContact_getAll', err, result);
        });
        */
    }

    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <ContactCell contact={rowData} {...this.props} />
        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return (
            <View key={'separator' + rowID} style={cc.separator} />
        );
    }

    render(){
        var { dataSource } = this.state;

        return (
            <View style={[sc.content]}>
                <ListView
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={(rowData, sectionID, rowID, highlightRow)=>this.renderRow(rowData, sectionID, rowID, highlightRow)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                />
            </View>
        );
    }
}

export default Contacts;