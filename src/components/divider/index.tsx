import React from 'react'

import styles from './styles.module.css'

const Divider:React.FC = (props) => {
    return (
        <div className={`${styles.divider}`}>
            <div className={`${styles.child}`}></div>
        </div>
    )
}

export default Divider