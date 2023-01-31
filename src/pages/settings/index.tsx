import React from 'react'

import Navbar from '../../components/navbar'
import Header from '../../components/header'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Settings: React.FC<Props> = (props) => {
    return (
        <>
        <Header title={'Settings'}/>
        <div className={`${props.className}`} >
           Settings
        </div>
        <Navbar/>
        </>
    )
}

export default Settings;