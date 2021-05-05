import React from 'react';
import '../scss/side-bar.scss';
import { Logo } from './Logo'
import { NavWrapper } from './NavWrapper'
import { MaskGroup } from './MaskGroup'
export const SideBar = () => {
    return(
    <div className="side-bar">
        <Logo />
        <NavWrapper />
        <MaskGroup />
    </div>
    )  
}