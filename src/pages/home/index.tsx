import React, { useState, useEffect } from 'react'

import Navbar from '../../components/navbar'
import Header from '../../components/header'
import Divider from '../../components/divider'
import Summary from '../../components/summary'

import avatar from '../../assets/avatar.png';
import { thousandSeparator } from '../../utility'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Owned: React.FC<Props> = (props) => {
    return (
        <>
            <Header title={'Home'} />
            <div className={`${props.className} ${styles.container}`} >
                <div className={`${styles.profile_container}`}>
                    <img className={`${styles.avatar}`} src={avatar} alt="avatar" />
                    <span className={`${styles.name}`}>Min Thu Khant</span>
                    <span className={`${styles.motto}`} >Nothing is impossible!</span>
                </div>
                <div className={`${styles.profile_container} ${styles.summary_container}`}>
                    <div className={`${styles.balance}`}>
                        <span className={`${styles.label} ${styles.info_container}`} >Balance</span>
                        <span className={`text-lg`}>{thousandSeparator(1232324)}</span>
                    </div>
                    <Divider />
                    <div className={`${styles.summary_container}`}>
                        <div className={`${styles.summary}`}>
                            <span className={`${styles.summary_title}`}>Usable</span>
                            <span className={`${styles.summary_value}`}>{thousandSeparator(2345)}</span>
                        </div>
                        <div className={`${styles.summary}`}>
                            <span className={`${styles.summary_title}`}>Saved</span>
                            <span className={`${styles.summary_value}`}>{thousandSeparator(2345)}</span>
                        </div>
                        <div className={`${styles.summary}`}>
                            <span className={`${styles.summary_title}`}>Bill</span>
                            <span className={`${styles.summary_value}`}>12323</span>
                        </div>
                        <div className={`${styles.summary}`}>
                            <span className={`${styles.summary_title}`}>Widthdrawed</span>
                            <span className={`${styles.summary_value}`}>{thousandSeparator(2345)}</span>
                        </div>
                        <div className={`${styles.summary}`}>
                            <span className={`${styles.summary_title}`}>Completed</span>
                            <span className={`${styles.summary_value}`}>{thousandSeparator(2345)}</span>
                        </div>
                        <div className={`${styles.summary}`}>
                            <span className={`${styles.summary_title}`}>Whist Lists</span>
                            <span className={`${styles.summary_value}`}>{thousandSeparator(2345)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Owned;