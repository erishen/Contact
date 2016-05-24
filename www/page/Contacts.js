"use strict";

import React, { Component } from 'react';
import { Text, View, Image, ListView } from 'react-native';

import ReactNativeContacts from 'react-native-contacts';

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
                <View style={[sc.header, cc.head, is.center]}>
                    <Text style={fc.big}>Contacts</Text>
                </View>
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