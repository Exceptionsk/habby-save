import React from 'react'
import styles from './styles.module.css'

type Props = {
    className?: string,
    children?: React.ReactNode,
}

const Navbar: React.FC<Props> = (props) => {
    return (
        <div className={`${props.className}`} >
            
        </div>
    )
}

export default Navbar;