import React from 'react'
import { NavLink  } from 'react-router-dom';

import {AiOutlineHome, AiOutlineSetting} from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { RiArrowUpDownFill } from 'react-icons/ri'
import { GiTakeMyMoney } from 'react-icons/gi'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Navbar: React.FC<Props> = (props) => {
    return (
        <div className={`${styles.nav_container} ${props.className}`} >
            <NavLink  to="/">
                <div className={`${styles.nav_button}`}>
                    <AiOutlineHome className={`${styles.icon}`} size={30} />
                      <span className={`${styles.icon_text}`}>Home</span>
                </div>
            </NavLink >
            <NavLink  to="/owned">
                <div className={`${styles.nav_button}`}>
                    <BsCartCheck className={`${styles.icon}`} size={30} />
                    <span className={`${styles.icon_text}`}>Owned</span>
                </div>
            </NavLink >
            <NavLink  to="/whistlist">
                <div className={`${styles.nav_button}`}>
                    <GiTakeMyMoney className={`${styles.icon}`} size={30} />
                    <span className={`${styles.icon_text}`}>Saves</span>
                </div>
            </NavLink >
            <NavLink  to="/history">
                <div className={`${styles.nav_button}`}>
                    <RiArrowUpDownFill className={`${styles.icon}`} size={30}/>
                    <span className={`${styles.icon_text}`}>Trans</span>
                </div>
            </NavLink >
            <NavLink  to="/settings">
                <div className={`${styles.nav_button}`}>
                    <AiOutlineSetting className={`${styles.icon}`} size={30} />
                    <span className={`${styles.icon_text}`}>Settings</span>
                </div>
            </NavLink >
        </div>
    )
}

export default Navbar;