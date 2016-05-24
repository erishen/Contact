"use strict";

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

class ContactCell extends Component {
    render(){
        var { contact, navigator } = this.props;
        console.log('contact', contact);

        if(contact) {
            var recordID = contact.recordID ? contact.recordID : 0;
            var familyName = contact.familyName ? contact.familyName : '';
            var givenName = contact.givenName ? contact.givenName : '';
            var middleName = contact.middleName ? contact.middleName : ' ';
            var phoneNumbers = contact.phoneNumbers ? contact.phoneNumbers : [];
            var emailAddresses = contact.emailAddresses ? contact.emailAddresses : [];
            var thumbnailPath = contact.thumbnailPath ? { uri: contact.thumbnailPath } : ic.people.source;

            return (
                <View style={[is.row, sc.contactLine, is.horizontalCenter]}>
                    <View style={sc.contactImg}>
                        <Image style={ic.people.style} source={thumbnailPath} />
                    </View>
                    <Text>{familyName + ',' + middleName + ', ' + givenName + ', '}</Text>
                    <Text>{phoneNumbers.length + ' phone, ' + emailAddresses.length + ' email'}</Text>
                </View>
            );
        }
        else
        {
            return (
                <View />
            );
        }
    }
}

export default ContactCell;
