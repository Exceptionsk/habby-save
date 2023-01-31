import React from "react";

import styles from './styles.module.css'

type Props = {
    bgClass?: string,
    progress: string | number,
    value: string | number
}
const ProgressBar: React.FC<Props> = (props) => {
    const { bgClass, progress, value } = props;
    return (
        <div className={`${styles.container} ${props.bgClass ? props.bgClass : 'bg-black'}`}>
            <div className={`${styles.filler} ${styles.animation} bg-accent2`} style={{width: `${progress}%`}} >
                <span className={`${styles.label}`}>{`${value}`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;