import React from 'react'

import Navbar from '../../components/navbar'
import Header from '../../components/header'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Home: React.FC<Props> = (props) => {
    return (
        <>
        <Header title={'History'}/>
        <div className={`${props.className}`} >
           History
        </div>
        <Navbar/>
        </>
    )
}

export default Home;