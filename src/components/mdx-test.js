import React from 'react'

export const MdxTest = (props) =>{

    return (
        <div style={{backgroundColor:"#000"}}>
            <h1>This is from .JS file</h1>
            <p>{props.children}</p>
        </div>
    )
}

