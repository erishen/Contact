/*
 * 目录设置
 */
"use strict";

import React from 'react';

import Contacts from '../page/Contacts';
import Favorites from '../page/Favorites';
import More from '../page/More';

const Menu = {
    Contacts: { id: 'Contacts', Content: Contacts, statusBarHidden: false }, // 联系人
    Favorites: { id: 'Favorites', Content: Favorites, statusBarHidden: true }, // 收藏
    More: { id: 'More', Content: More, statusBarHidden: false } // 更多
};

export default Menu;