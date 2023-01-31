import React from 'react'

import { thousandSeparator } from '../../utility'
import styles from './styles.module.css'

type Props = {
    target: string | number,
    saved: string | number,
    remain: string | number
}

const Summary: React.FC<Props> = (props) => {
    return (
        <div className={`${styles.information}`}>
            <div className={`${styles.info_container}`}>
                <span className={`${styles.title}`}>{ 'Target'}</span>
                <span className={`${styles.money}`}>{thousandSeparator(props.target)}</span>
            </div>
            <div className={`${styles.info_container}`}>
                <span className={`${styles.title}`}>{'Saved'}</span>
                <span className={`${styles.money}`}>{thousandSeparator(props.saved)}</span>
            </div>
            <div className={`${styles.info_container}`}>
                <span className={`${styles.title}`}>{'Remain'}</span>
                <span className={`${styles.money}`}>{thousandSeparator(props.remain)}</span>
            </div>
        </div>
    )
}

export default Summary