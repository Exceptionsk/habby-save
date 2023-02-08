import React, { useEffect, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd, IoMdClose } from 'react-icons/io'

import Navbar from '../../components/navbar'
import Header from '../../components/header'
import TextInput from '../../components/TextInput'
import WhistListCard from '../../components/whistlistCard'

import image from '../../assets/img/xn-raiser.jpg'
import freedom from '../../assets/img/freedom.jpg'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const WhistList: React.FC<Props> = (props) => {
    const [search, setSearch] = useState<boolean>(false)
    const data = [
        { id: 1, name: 'XN raiser', image: image, progress: 55 },
        { id: 2, name: 'XN raiser', image: freedom, progress: 34 },
        { id: 3, name: 'XN raiser', image: image, progress: 65 },
        { id: 4, name: 'XN raiser', image: freedom, progress: 34 },
        { id: 5, name: 'XN raiser', image: freedom, progress: 87 },
        { id: 6, name: 'XN raiser', image: image, progress: 12 },
        { id: 7, name: 'XN raiser', image: freedom, progress: 6 },
        { id: 8, name: 'XN raiser', image: image, progress: 8 },
        { id: 9, name: 'XN raiser', image: freedom, progress: 34 },
        { id: 10, name: 'XN raiser', image: image, progress: 73 },
        { id: 11, name: 'XN raiser', image: image, progress: 44 },
        { id: 12, name: 'XN raiser', image: freedom, progress: 2 },
    ]

    const rightComponents = () => {
        return (
            <div onClick={handleSearchClick}>{!search ? <AiOutlineSearch size={22} /> : <IoMdClose size={22} />}</div>
        )
    }

    const handleSearchClick = () => {
        if (search) {
            setSearch(false)
        } else {
            setSearch(true)
        }
    }

    useEffect(() => {
        if (search) {

        }
    }, [search])
    return (
        <>
            <Header title={'Whist List'}
                rightComponents={rightComponents()}
            />
            <div className={styles.floating_button}><IoMdAdd className={'text-white'} size={22} /></div>
            <div className={`${props.className} ${styles.container}`} >
                {
                    search &&
                    <div className={styles.search_bar}>
                        <TextInput autoFocus={true}
                            icon={<AiOutlineSearch size={22} />}
                        />
                    </div>
                }
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