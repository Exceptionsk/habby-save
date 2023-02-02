import React from 'react'

import styles from './styles.module.css'

type Props = {
    className?: string,
    icon?: React.ReactNode,
    placeholder?: string,
    onIconClick?:  React.MouseEventHandler<HTMLDivElement>,
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void
}
const TextInput: React.FC<Props> = ({ className, icon, onIconClick, ...Props }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <input type="text" className={styles.input} {...Props} />
            {
                icon &&
                <div className={styles.icon} onClick={onIconClick}>
                    {icon}
                </div>
            }
        </div>
    )
}


export default TextInput