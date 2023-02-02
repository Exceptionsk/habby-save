import React from 'react'

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import ProgressProvider from '../../utility/progressProvider'
import 'react-circular-progressbar/dist/styles.css'

type Props = {
    progress: number,
    textSize: number
}

const CircularProgress:React.FC<Props> = (props) => {
    return (
        <ProgressProvider valueStart={0} valueEnd={props.progress}>
            {(value: number) => <CircularProgressbar

                value={value} text={`${value}%`}
                className={'h-52'}
                strokeWidth={5}
                styles={buildStyles({
                    pathColor: `#B65200`,
                    textColor: `#00B652`,
                    textSize: `${props.textSize}em`,

                })}
            />}
        </ProgressProvider>
    )
}

export default CircularProgress