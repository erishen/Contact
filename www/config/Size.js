/*
 * 尺寸设置
 */
"use strict";

import React from 'react';
import { Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

const Size = {
    content: {  // 内容尺寸(包括顶部)
        marginTop: 20,
        width: width,
        height: height - 70
    },
    header: {  // 顶部尺寸
        width: width,
        height: 40
    },
    footer: {  // 底部尺寸
        width: width,
        height: 50
    },
    contactLine: {
        width: width,
        height: 60
    },
    contactImg: {
        marginLeft: 12,
        marginRight: 12
    }
};

export default Size;