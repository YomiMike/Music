import React from "react";
import F from '../Footer/Footer.module.css';




function Footer() {
    return(
        <div className={F.all}>
            <div className={F.icons}>
                <img alt='ВК' src='#'/>
                <img alt='Инста' src='#'/>
                <img alt='Твитер' src='#'/>
                <img alt='Фейсбук' src='#'/>
            </div>
        </div>

    )
}

export default Footer