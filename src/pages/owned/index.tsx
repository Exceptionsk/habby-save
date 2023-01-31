import React from 'react'

import Navbar from '../../components/navbar'
import Header from '../../components/header'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Owned: React.FC<Props> = (props) => {
    return (
        <>
        <Header title={'Owned'}/>
            <div className={`${props.className}`} >
                Owned
            </div>
            <Navbar />
        </>
    )
}

export default Owned;