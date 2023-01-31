import React from 'react'

import styles from './styles.module.css'
type Props = {
    title?: string,
    className?: string,
    children?: React.ReactNode,
}

const Header: React.FC<Props> = (props) => {
    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.title}`}>{props.title}</span>
        </div>
    )
}

export default Header