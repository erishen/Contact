/*
 * 尺寸设置
 */
"use strict";

import React from 'react';
import { Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

const Size = {
    content: { marginTop: 20 }, // 内容距离顶部尺寸
    footMenu: { width: width / 3, height: 60 }, // 底部目录单个菜单长宽
};

export default Size;