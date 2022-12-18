import React from "react";
import First from '../MainMenu/MainMenu.module.css'
import { NavLink } from "react-router-dom";




function MainMenu() {
    return (
        <div>
            <div className={First.container}>
                <div className={First.menu}>
                    <div className={First.logo}>
                        <NavLink to='/'>
                            <img src="#" alt='Изображение Логотипа' />
                        </NavLink>
                    </div>
                    <div className={First.sub_navigation}>
                        <div className={First.catalog}>
                            <NavLink to='/Catalog'>Каталог</NavLink>
                        </div>
                        <div className={First.About}>
                            <NavLink to='/About'>О нас</NavLink>
                        </div>
                        <div className={First.Contacts}>
                            <NavLink to='/Contacts'>Контакты</NavLink>
                        </div>
                    </div>
                    <div className={First.Icon_Enter}>
                        <img src="#" alt="Иконка входа" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;