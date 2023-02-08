import React from 'react'
import Switch from "react-switch"
import styles from './styles.module.css'

type Props = {
    className? : string,
    label?: string,
    onChange: any,
    checked: boolean
}

const SwitchComponent: React.FC<Props> = ({className, label, ...Props}) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <label>
                <span>{label}</span>
                <Switch uncheckedIcon={false} checkedIcon={false} height={20} width={45} {...Props} />
            </label>
        </div>
    )
}

export default SwitchComponent