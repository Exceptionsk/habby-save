import React from 'react'
import { NavLink  } from 'react-router-dom';

import {AiOutlineHome, AiOutlineUnorderedList, AiOutlineSetting} from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { BiTransferAlt } from 'react-icons/bi'

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
                      {/* <span className={`${styles.icon_text}`}>Home</span> */}
                </div>
            </NavLink >
            <NavLink  to="/whistlist">
                <div className={`${styles.nav_button}`}>
                    <AiOutlineUnorderedList className={`${styles.icon}`} size={30} />
                    {/* <span className={`${styles.icon_text}`}>Whist List</span> */}
                </div>
            </NavLink >
            <NavLink  to="/owned">
                <div className={`${styles.nav_button}`}>
                    <BsCartCheck className={`${styles.icon}`} size={30} />
                    {/* <span className={`${styles.icon_text}`}>Owned</span> */}
                </div>
            </NavLink >
            <NavLink  to="/history">
                <div className={`${styles.nav_button}`}>
                    <BiTransferAlt className={`${styles.icon}`} size={30}/>
                    {/* <span className={`${styles.icon_text}`}>History</span> */}
                </div>
            </NavLink >
            <NavLink  to="/settings">
                <div className={`${styles.nav_button}`}>
                    <AiOutlineSetting className={`${styles.icon}`} size={30} />
                    {/* <span className={`${styles.icon_text}`}>Settings</span> */}
                </div>
            </NavLink >
        </div>
    )
}

export default Navbar;