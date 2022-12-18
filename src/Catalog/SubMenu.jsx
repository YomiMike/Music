import React from "react";
import C from '../Catalog/Catalog.module.css'
import { NavLink } from 'react-router-dom';




function SubMenu() {
    return (
        <div>
            <div className={C.container}>
                <div className={C.SubMenu}>
                    <div>
                        <NavLink to='/catalog'>Струнные</NavLink>
                    </div>
                    <div>
                        <NavLink to='/Bush'>Ударные</NavLink>
                    </div>
                    <div>
                        <NavLink to='/Access'>Аксессуары</NavLink>
                    </div>
                    <div>
                        <NavLink to='/Oborudov'>Оборудование</NavLink>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SubMenu;