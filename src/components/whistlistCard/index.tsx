import React from 'react'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '../circularProgressBar'

import styles from './styles.module.css'

type Props = {
    item: {
        id: number,
        name: string,
        image: string,
        progress: number
    },
    className?: string
}

const WhistListCard = (props: Props) => {
    const { item, className } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/whistlistDetail', { state: { item: item } })
    }
    return (
        <div className={`${className}`} onClick={handleClick} >
            <div style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

            }}>
                <div className={`${styles.progress_container}`}>
                    <div className={styles.progress}><CircularProgress progress={item.progress} textSize={1.5} /></div>
                </div>
            </div>
        </div>
    )
}

export default WhistListCard