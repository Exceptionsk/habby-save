import React from 'react'

import { RiArrowUpDownFill } from 'react-icons/ri'
import { IoIosShareAlt } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { ImCheckboxUnchecked } from 'react-icons/im'

import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const CardToolbar: React.FC<Props> = (props) => {
    return (
        <div className={`${styles.container} ${props.className}`} >
            <div className={`${styles.toolbar_button}`}>
            <ImCheckboxUnchecked className={`${styles.icon}`} size={30} />
                <span className={styles.icon_text}>Public</span>
            </div>
            <div className={`${styles.toolbar_button}`}>
                <MdEdit className={`${styles.icon}`} size={30} />
                <span className={styles.icon_text}>Edit</span>
            </div>
            <div className={`${styles.toolbar_button}`}>
                <RiArrowUpDownFill className={`${styles.icon}`} size={30} />
                <span className={styles.icon_text}>History</span>
            </div>
            <div className={`${styles.toolbar_button}`}>
                <IoIosShareAlt className={`${styles.icon}`} size={30} />
                <span className={styles.icon_text}>Share</span>
            </div>
        </div>
    )
}

export default CardToolbar;