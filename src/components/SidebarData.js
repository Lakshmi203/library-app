import React, {useState} from 'react'
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Favourites',
        path: '/checkout',
        icon: <BsIcons.BsBookmarkCheckFill />,
        cName: 'nav-text'
    },
    {
        title: 'Star Books',
        path: '/starbooks',
        icon: <BsIcons.BsStarFill />,
        cName: 'nav-text'
    }
]