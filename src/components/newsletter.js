import React from 'react'
import { FaBook } from "react-icons/fa"

import coffeImage from "../images/cuplogo-sm.png"

import newsLetterStyles from "./newsletter.module.scss"



const NewsLetter = () =>{

    return (
            <div className={newsLetterStyles.wrapper}>
                <h1> Subscribe Me</h1>
                <form>
                    <div>
                        <input type="email" placeholder="YOUR EMAIL" />
                        <input type="submit" value = "SUBSCRIBE" />
                    </div>
                </form>
                <hr/>
                <div className={newsLetterStyles.buymecoffeeWrapper}>
                    <a href="https://ko-fi.com/ajeetchaulagain" > <img src={coffeImage}/>Buy me a coffee </a>
                </div>
            </div>
    )
}

export default NewsLetter