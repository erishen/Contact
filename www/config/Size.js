/*
 * 尺寸设置
 */
"use strict";

import React from 'react';
import { Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

const Size = {
    header: {  // 顶部尺寸
        marginTop: 20,
        width: width,
        height: 40
    },
    headerLeft: {
        marginLeft: 5
    },
    headerRight: {
        marginRight: 5
    },
    content: {  // 内容尺寸
        width: width,
        height: height - 70
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
    },
    contactRow: {
        lineHeight: 20
    }
};

export default Size;