import React, { useEffect, useState } from 'react'

import Navbar from '../../components/navbar'
import Header from '../../components/header'
import WhistListCard from '../../components/whistlistCard'

import image from '../../assets/img/xn-raiser.jpg'
import freedom from '../../assets/img/freedom.jpg'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const WhistList: React.FC<Props> = (props) => {
    const [cardStyle, setCardStyle] = useState<string>()
    const data = [
        { id: 1, name: 'XN raiser', image: image, progress: 55 },
        { id: 2, name: 'XN raiser', image: freedom , progress: 34},
        { id: 3, name: 'XN raiser', image: image, progress: 65 },
        { id: 4, name: 'XN raiser', image: freedom, progress: 34 },
        { id: 5, name: 'XN raiser', image: freedom , progress: 87},
        { id: 6, name: 'XN raiser', image: image, progress: 12 },
        { id: 7, name: 'XN raiser', image: freedom , progress: 6},
        { id: 8, name: 'XN raiser', image: image, progress: 8 },
        { id: 9, name: 'XN raiser', image: freedom, progress: 34 },
        { id: 10, name: 'XN raiser', image: image, progress: 73 },
        { id: 11, name: 'XN raiser', image: image, progress: 44 },
        { id: 12, name: 'XN raiser', image: freedom , progress: 2 },
    ]

 
    return (
        <>
            <Header title={'Whist List'} />
            <div className={`${props.className} ${styles.container}`} >
                <div className={styles.search_bar}>
                    <input type="text" />
                </div>
                <div className={styles.card_container}>
                    {
                        data.map((item, key) => {
                            return (
                                <WhistListCard item={item} key={key} />
                            )
                        })
                    }
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default WhistList;