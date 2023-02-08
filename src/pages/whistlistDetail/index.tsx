import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CgDollar } from 'react-icons/cg'
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'


import Navbar from '../../components/navbar'
import Header from '../../components/header'
import Summary from '../../components/summary'
import CircularProgress from '../../components/circularProgressBar';
import SwitchComponent from '../../components/switch';

import { thousandSeparator } from '../../utility'
import image from '../../assets/img/xn-raiser.jpg'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Home: React.FC<Props> = (props) => {
    const [published, setPublished] = useState(true)
    const location = useLocation()
    const history = [
        {
            amount: 2000,
            time: '2022-12-01'
        },
        {
            amount: 220,
            time: '2022-11-01'
        },
        {
            amount: 34000,
            time: '2022-10-01'
        },
        {
            amount: 5500,
            time: '2022-9-01'
        },
        {
            amount: 23400,
            time: '2022-8-01'
        },
        {
            amount: 23400,
            time: '2022-8-01'
        },
        {
            amount: 23400,
            time: '2022-8-01'
        },
        {
            amount: 23400,
            time: '2022-8-01'
        },
        {
            amount: 23400,
            time: '2022-8-01'
        }
    ]

    const handleCheck = (value: boolean) => {
        setPublished(value)
    }


    return (
        <>
            <Header title={location.state.item.name} backButton />
            <div className={`${props.className} ${styles.container}`} >
                <div style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }} className={`${styles.image}`}>
                    <div className={`${styles.progress}`}>
                        <div className={`${styles.published}`}>
                            <SwitchComponent onChange={handleCheck} checked={published} label={`Public`} />
                        </div>
                        <CircularProgress progress={66} textSize={1.3} />
                    </div>
                </div>
                <Summary target={300000} saved={200000} remain={100000} />
                <div className={`${styles.timeline}`}>
                    <VerticalTimeline lineColor={"gray"} >
                        {
                            history.map((item, key) => {
                                return (
                                    <VerticalTimelineElement
                                        key={key}
                                        className="vertical-timeline-element text-green-700"
                                        contentStyle={{ background: '#212528', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #B65200' }}
                                        date={item.time}
                                        iconStyle={{ background: '#212528', color: '#B65200' }}
                                        icon={<CgDollar />}
                                    >
                                        <h3 className="vertical-timeline-element-title text-accent2">added {thousandSeparator(item.amount.toString())} </h3>
                                    </VerticalTimelineElement>
                                )
                            })
                        }


                    </VerticalTimeline>
                </div>
            </div>

            <Navbar />
        </>
    )
}

export default Home