import React from 'react'
import quickInfoStyle from "./quick-info.module.scss"

import {
    FaInfoCircle
} from 'react-icons/fa'

export const QuickInfo = (props) =>{

  
    
    return (
        <div className={quickInfoStyle.quickInfo}>
            <div><FaInfoCircle/></div>
            <p>{props.children}</p>
        </div>
    )
}

