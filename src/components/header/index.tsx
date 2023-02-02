import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'
type Props = {
    title?: string,
    className?: string,
    backButton?: boolean,
    children?: React.ReactNode,
}

const Header: React.FC<Props> = ({ backButton, title }) => {
    const navigate = useNavigate()
    return (
        <div className={`${styles.container}`}>
            {backButton && <div className={styles.back} onClick={() => { navigate(-1) }}><IoIosArrowBack size={24} /></div>}
            <span className={`${styles.title}`}>{title}</span>
        </div>
    )
}

export default Header