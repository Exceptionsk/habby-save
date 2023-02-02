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
    completed?: boolean,
    className?: string
}

const WhistListCard: React.FC<Props> = (props) => {
    const { item, className } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/whistlistDetail', { state: { item: item } })
    }
    return (
        <div className={`${className} ${styles.container}`} onClick={handleClick} >
            <div style={{
                backgroundImage: `${props.completed ? '' : 'linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),'} url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

            }}>

                <div className={`${styles.progress_container}`}>
                    <div className={styles.progress}>
                        {
                            !props.completed && <CircularProgress progress={item.progress} textSize={1.5} />
                        }
                    </div>
                </div>
            </div>
            <div className={`${styles.text_container}`} >
                <span className={`${styles.text}`}>{item.name}</span>
            </div>
        </div>
    )
}

export default WhistListCard