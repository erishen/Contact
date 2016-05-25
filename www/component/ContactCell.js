"use strict";

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import ic from '../config/Image';
import fc from '../config/Font';
import cc from '../config/Color';
import sc from '../config/Size';
import is from '../style/Index';

class ContactCell extends Component {
    pressContact(recordID){
        console.log('pressContact', recordID);
    }
    render(){
        var { contact, navigator } = this.props;
        console.log('contact', contact);

        if(contact) {
            var recordID = contact.recordID ? contact.recordID : 0;
            var familyName = contact.familyName ? contact.familyName : '';
            var middleName = contact.middleName ? contact.middleName : '';
            var givenName = contact.givenName ? contact.givenName : '';
            var phoneNumbers = contact.phoneNumbers ? contact.phoneNumbers : [];
            var emailAddresses = contact.emailAddresses ? contact.emailAddresses : [];
            var thumbnailPath = contact.thumbnailPath ? { uri: contact.thumbnailPath } : ic.people.source;

            // 名字
            var name = '';
            if(familyName != '')
                name += familyName;

            if(middleName != '')
                name += middleName;

            if(givenName != '')
                name += givenName;

            // 手机号码
            var phone = '';
            var index = 0;
            for(var i in phoneNumbers)
            {
                index++;
                var phoneNumber = phoneNumbers[i];
                var number = phoneNumber.number;
                var label = phoneNumber.label;

                // 只显示前两个手机号码
                if(index <= 2)
                    phone += number + ', ';
                else
                    break;
            }
            phone = phone.substring(0, phone.length-2);

            return (
                <TouchableOpacity onPress={()=>this.pressContact(recordID)}>
                    <View style={[is.row, sc.contactLine, is.horizontalCenter]}>
                        <View style={sc.contactImg}>
                            <Image style={ic.people.style} source={thumbnailPath} />
                        </View>
                        <View>
                            <Text style={[fc.medium, sc.contactRow]}>{name}</Text>
                            <Text style={[fc.small, sc.contactRow]}>{phone}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
