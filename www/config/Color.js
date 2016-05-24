/*
 * 颜色设置
 */
"use strict";

import React from 'react';
import { StyleSheet, PixelRatio, Dimensions } from 'react-native';


const Color = {
    container: { backgroundColor: '#F5FCFF' }, // 默认容器的背景色
    head: {
        backgroundColor: '#cccccc',
        borderTopColor: '#4a4a4a',
        borderBottomColor: '#4a4a4a',
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: 1/PixelRatio.get()
    }, // 顶部栏背景色 + 边框色
    separator: {
        borderWidth: 1/PixelRatio.get(),
        borderColor: '#cccccc'
    }, // 间隔线
};

export default Color;