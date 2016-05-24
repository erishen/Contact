"use strict";

import React from 'react';
import { StyleSheet, PixelRatio, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

const Index = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontalCenter: {
        alignItems: 'center'
    }
});

export default Index;